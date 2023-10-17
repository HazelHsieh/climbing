<script setup>
import { ref, onMounted } from "vue";
import { NCard, NButton, NUpload, NForm, NGrid, NGi, NFormItemGi, NInput, NInputNumber, NRadioButton, NRadioGroup, NSwitch } from "naive-ui";
import api from "@/apis/https.js";
import Toast from "@/utils/Toast";
const props = defineProps({
  tempProduct: {
    type: Object,
    default() {
      return {};
    },
  },
  isNew: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
const data = ref(props.tempProduct);
const fileList = ref([]);
onMounted(() => {
  if (data.value.imagesUrl?.length > 0) {
    data.value.imagesUrl.forEach((el, i) => {
      fileList.value.push({ id: i, status: "finished", url: el });
    });
  }
});
const updateFile = async ({ file, onProgress, onFinish, onError }) => {
  const formData = new FormData();
  formData.append("file-to-upload", file.file);
  try {
    const res = await api.uploadImg(formData, {
      // Request Headers
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: ({ percent }) => {
        onProgress({ percent: Math.ceil(percent) });
      },
    });
    if (res.data.success) {
      console.log(res);
      fileList.value.push({ id: res.data.imageUrl, status: "finished", url: res.data.imageUrl });
      if (data.value.imagesUrl === undefined) data.value.imagesUrl = [];
      data.value.imagesUrl.push(res.data.imageUrl);
      onFinish();
      Toast.fire({
        title: "Image Upload Success !",
        icon: "success",
      });
    } else {
      Toast.fire({
        title: `${res.data.message}`,
        icon: "error",
      });
    }
  } catch (err) {
    console.log(err.toString());
    onError();
  }
};
const removeFile = (img) => {
  data.value.imagesUrl = data.value.imagesUrl?.filter((el) => {
    return el !== img.file.url;
  });
};
const beforeUpload = (data) => {
  if (!data.file.file?.type.match("image")) {
    Toast.fire({
      title: "Only upload image files, please re-upload.",
      icon: "error",
    });
  }
};
const rules = {
  title: {
    required: true,
    trigger: ["blur", "input"],
    message: "Plz input product name",
  },
  category: {
    required: false,
    trigger: ["blur", "change"],
    message: "Plz choose category",
  },
  itinerary: {
    required: true,
    trigger: ["blur", "input"],
    message: "Plz input itinerary",
  },
  location: {
    required: true,
    trigger: ["blur", "input"],
    message: "Plz input location",
  },
  origin_price: {
    type: "number",
    required: false,
    trigger: ["blur", "change"],
    message: "Plz input origin price",
  },
  price: {
    type: "number",
    required: false,
    trigger: ["blur", "change"],
    message: "Plz input price",
  },
  unit: {
    required: true,
    trigger: ["blur", "input"],
    message: "Plz input unit",
  },
  description: {
    required: true,
    trigger: ["blur", "input"],
    message: "Plz input description",
  },
  content: {
    required: true,
    trigger: ["blur", "input"],
    message: "Plz input content",
  },
};
</script>

<template>
  <NCard style="max-width: 95%; width: 800px" :title="(isNew ? 'Add' : 'Edit') + ' Product'" :bordered="false" size="huge" role="dialog" aria-modal="true">
    <NForm ref="formRef" :model="data" :rules="rules" size="medium" label-placement="top">
      <NGrid :x-gap="24" cols="1 s:2" responsive="screen">
        <NGi>
          <NUpload :max="5" list-type="image-card" :default-file-list="fileList" :custom-request="updateFile" @before-upload="beforeUpload" @remove="removeFile" class="mb-4" />
          <NFormItemGi label="Product Name" path="title">
            <n-input v-model:value="data.title" placeholder="Product Name" />
          </NFormItemGi>
          <NFormItemGi label="Product Category" path="category">
            <NRadioGroup v-model:value="data.category" name="category">
              <NRadioButton value="輕鬆爬爬"> 輕鬆爬爬 </NRadioButton>
              <NRadioButton value="流汗爬爬"> 流汗爬爬 </NRadioButton>
              <NRadioButton value="認真爬爬"> 認真爬爬 </NRadioButton>
            </NRadioGroup>
          </NFormItemGi>
          <NFormItemGi label="Enabled" path="is_enabled">
            <NSwitch v-model:value="data.is_enabled" />
          </NFormItemGi>
          <NGrid :x-gap="12" cols="2">
            <NFormItemGi label="Itinerary" path="itinerary">
              <NInput v-model:value="data.itinerary" placeholder="Itinerary" />
            </NFormItemGi>
            <NFormItemGi label="Location" path="location">
              <NInput v-model:value="data.location" placeholder="Location" />
            </NFormItemGi>
          </NGrid>
        </NGi>
        <NGi>
          <NGrid :x-gap="12" cols="3">
            <NFormItemGi label="Origin Price" path="origin_price">
              <NInputNumber v-model:value="data.origin_price" placeholder="Origin" />
            </NFormItemGi>
            <NFormItemGi label="Price" path="price">
              <NInputNumber v-model:value="data.price" placeholder="Price" />
            </NFormItemGi>
            <NFormItemGi label="Unit" path="unit">
              <NInput v-model:value="data.unit" placeholder="Unit" />
            </NFormItemGi>
          </NGrid>
          <NFormItemGi label="Description" path="description">
            <NInput v-model:value="data.description" placeholder="Description" />
          </NFormItemGi>
          <NFormItemGi label="Content" path="content">
            <NInput type="textarea" :autosize="{ minRows: 6, maxRows: 10 }" v-model:value="data.content" placeholder="Content" />
          </NFormItemGi>
        </NGi>
      </NGrid>
    </NForm>
    <div class="text-right">
      <NButton @click="$emit('closeModal', false)" class="mr-3">Cancel</NButton>
      <NButton @click="$emit('updateProduct', data)" type="primary" class="text-text_color">
        {{ isNew ? "Add" : "Update" }}
        <span v-if="loading" class="material-symbols-outlined text-sm ml-2"> update </span>
        <span v-else class="material-symbols-outlined text-sm ml-2"> add_circle </span>
      </NButton>
    </div>
  </NCard>
</template>
