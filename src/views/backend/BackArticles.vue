<script setup>
import { NSpace, NDataTable, NTag, NButton, NModal, NPagination } from "naive-ui";
import { h, ref, reactive, inject, onMounted } from "vue";
import Toast from "@/utils/Toast";
// import ArticleModal from "@/components/backend/ArticleModal.vue";
import api from "@/apis/https.js";

// data
const loading = ref(false);
const showModal = ref(false);
const isNew = ref(false);
const tempArticle = ref({});
const pagination = reactive({
  current: 1,
  total: 2,
});
// get Article
const tableData = reactive({ data: [] });
const getData = async () => {
  loading.value = true;
  try {
    const res = await api.getAdminData("articles", pagination.current);
    loading.value = false;
    if (res.data.success) {
      tableData.data = res.data.articles;
      pagination.total = res.data.pagination.total_pages;
    }
  } catch (err) {
    loading.value = false;
    console.log(err.toString());
  }
};
onMounted(() => {
  getData();
});
// update item
const update = async (data) => {
  loading.value = true;
  let slug = "article";
  let httpMethod = "post";
  if (!isNew.value) {
    slug = `article/${data.id}`;
    httpMethod = "put";
  }
  try {
    const res = await api.updateAdminData(httpMethod, slug, data);
    showModal.value = false;
    loading.value = false;
    if (res.data.success) {
      Toast.fire({
        title: `${res.data.message}`,
        icon: "success",
        timer: 1500,
      });
      getData();
    } else {
      Toast.fire({
        title: `${res.data.message.toString}`,
        timer: 1500,
      });
    }
  } catch (err) {
    loading.value = false;
    Toast.fire({
      title: `${err.toString()}`,
      timer: 1500,
    });
  }
};
// delete item
const delList = async (rowData) => {
  loading.value = true;
  try {
    const res = await api.delAdminData("article", rowData.id);
    loading.value = false;
    Toast.fire({
      title: `${res.data.message}`,
      icon: "success",
    });
    getData();
  } catch (err) {
    loading.value = false;
    console.log(err.message);
    console.dir(error);
  }
};
// table key
const createColumns = ({ editList, clickDel }) => {
  return [
    {
      title: "No.",
      key: "num",
    },
    {
      title: "Author",
      key: "author",
    },
    {
      title: "Article Name",
      key: "title",
      width: "35%",
    },
    {
      title: "Tag",
      key: "tag",
    },
    {
      title: "Enable",
      key: "is_enabled",
      render(row) {
        return h(NTag, { type: row.is_enabled === true ? "success" : "", bordered: false }, { default: () => (row.is_enabled === true ? "Yes" : "No") });
      },
    },
    {
      title: "Action",
      key: "actions",
      render(row) {
        return h("div", null, [h(NButton, { type: "primary", size: "small", onClick: () => editList(row), class: "mr-2 text-text_color" }, { default: () => "Edit" }), h(NButton, { size: "small", onClick: () => clickDel(row) }, { default: () => "Del" })]);
      },
    },
  ];
};
const columns = createColumns({
  editList(rowData) {
    tempArticle.value = rowData;
    isNew.value = false;
    showModal.value = true;
  },
  clickDel(rowData) {
    Toast.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // 確定刪除
        delList(rowData);
      }
    });
  },
});
const pageChange = (v) => {
  pagination.current = v;
  getData();
};
</script>

<template>
  <main class="bg-creamWhite2 h-screen w-full overflow-y-auto text-text_color">
    <div class="sticky top-0 z-10 border-b border-solid border-gray-300 p-5 text-lg font-medium bg-white">文章管理</div>
    <section class="m-4 bg-white border border-gray-300 border-solid rounded shadow">
      <!-- <div class="border-b border-solid border-gray-300 p-4 ">產品管理</div> -->
      <NButton
        @click="
          isNew = true;
          showModal = true;
          tempArticle = {};
        "
        strong
        type="primary"
        class="block mr-auto m-2 text-text_color">
        Add Article +
      </NButton>
      <NSpace vertical :size="12">
        <NDataTable :bordered="false" :columns="columns" :data="tableData.data" :pagination="false" :loading="loading" />
        <NPagination class="justify-center" v-model:page="pagination.current" :page-count="pagination.total" @update:page="pageChange" />
      </NSpace>
      <NModal v-model:show="showModal" :mask-closable="false">
        <!-- <ArticleModal :tempArticle="tempArticle" :isNew="isNew" :loading="loading" @updateArticle="update" @closeModal="(v) => (showModal = v)" /> -->
      </NModal>
    </section>
  </main>
</template>
