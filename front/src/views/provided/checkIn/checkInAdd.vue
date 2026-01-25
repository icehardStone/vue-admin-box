
<template>
    <div class="container">
        <!-- 左侧Tab导航 -->
        <div class="tabs">
            <div v-for="(section, index) in sections" :key="index" :class="['tab', { active: activeIndex === index }]"
                @click="scrollToSection(index)">
                {{ section.name }}
            </div>
        </div>

        <!-- 右侧内容区域，可滚动 -->
        <div class="content" ref="contentRef" @scroll="onScroll">
            <el-form :model="form" label-position="right" label-width="auto">

                <div :ref="el => sectionRefs[0] = el" class="section">
                    <h2>老人信息</h2>
                    <div class="record-add-body-basic">
                        <div class="record-add-basic-image">
                            <el-upload class="avatar-uploader"
                                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                                :show-file-list="false" :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                                <el-icon v-else class="avatar-uploader-icon">
                                    <Plus />
                                </el-icon>
                            </el-upload>
                            <el-tag style="margin-top: 20px;" type="primary" effect="dark">
                                老人头像
                            </el-tag>
                        </div>
                        <div class="record-add-basic-form">
                            <el-row :gutter="120">
                                <el-col :span="12">
                                    <el-form-item label="长者姓名">
                                        <el-input v-model="form.name" placeholder="长者姓名" :prefix-icon="Search" />
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="身份证号">
                                        123344
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="120">
                                <el-col :span="12">
                                    <el-form-item label="性别">
                                        男
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="手机号码">
                                        17356867983
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="120">
                                <el-col :span="12">
                                    <el-form-item label="年龄">
                                        76
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="民族">
                                        汉族
                                    </el-form-item>
                                </el-col>
                            </el-row>



                            <el-row :gutter="120">
                                <el-col :span="24">
                                    <el-form-item label="备注">
                                        12313222222222222222
                                    </el-form-item>
                                </el-col>

                            </el-row>
                        </div>
                    </div>
                </div>
                <div :ref="el => sectionRefs[1] = el" class="section">
                    <h2>入住信息</h2>
                    <el-form-item label="就餐方式">
                        <el-radio-group v-model="form.type">
                            <el-radio value="Online activities" name="type">
                                统配
                            </el-radio>
                            <el-radio value="Online activities" name="type">
                                点餐
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="禁忌药品">
                        <el-input v-model="form.user" placeholder="禁忌药品" clearable />
                    </el-form-item>
                    <el-form-item label="饮食方式">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox value="Online activities" name="type">
                                普通饮食
                            </el-checkbox>
                            <el-checkbox value="Promotion activities" name="type">
                                半流质饮食
                            </el-checkbox>
                            <el-checkbox value="Offline activities" name="type">
                                流质饮食
                            </el-checkbox>
                            <el-checkbox value="Simple brand exposure" name="type">
                                低糖饮食
                            </el-checkbox>
                            <el-checkbox value="Simple brand exposure" name="type">
                                低嘌呤饮食
                            </el-checkbox>
                            <el-checkbox value="Simple brand exposure" name="type">
                                低脂饮食
                            </el-checkbox>
                            <el-checkbox value="Simple brand exposure" name="type">
                                碎食
                            </el-checkbox>
                            <el-checkbox value="Simple brand exposure" name="type">
                                忌食类
                            </el-checkbox>

                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="保证金单号">
                        <el-input v-model="form.user" placeholder="保证金单号" clearable />
                    </el-form-item>
                </div>
                <div :ref="el => sectionRefs[2] = el" class="section">
                    <h2>监护人信息</h2>
                    <el-table style="width: 100%">
                        <el-table-column fixed prop="city" label="第一担保人" />
                        <el-table-column prop="date" label="监护人姓名1" />
                        <el-table-column prop="name" label="手机号码" />
                        <el-table-column prop="state" label="亲属关系" />
                        <el-table-column prop="address" label="性别" />
                        <el-table-column prop="zip" label="证件号码" />
                        <el-table-column prop="zip" label="居住地址" />
                        <el-table-column prop="zip" label="户籍地址" />
                        <el-table-column prop="zip" label="操作" />
                    </el-table>
                    <el-button :icon="Plus" style="width: 100%;" type="primary"></el-button>

                </div>
                <div :ref="el => sectionRefs[3] = el" class="section">
                    <h2>签订合同</h2>
                    <el-form-item label="合同类型">
                        <el-radio-group v-model="form.type">
                            <el-radio value="Online activities" name="type">
                                寄养协议
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="计费周期">
                        <el-col :span="11">
                            <el-date-picker v-model="form.date1" type="date" placeholder="开始时间" style="width: 100%" />
                        </el-col>
                        <el-col :span="2" class="text-center">
                            <span class="text-gray-500">-</span>
                        </el-col>
                        <el-col :span="11">
                            <el-time-picker v-model="form.date2" placeholder="结束时间" style="width: 100%" />
                        </el-col>
                    </el-form-item>

                    <el-form-item label="收费内容">
                        <el-table style="width: 100%">
                            <el-table-column prop="date" label="费用类型" />
                            <el-table-column prop="date" label="计费方式" />
                            <el-table-column prop="name" label="已选内容" />
                            <el-table-column prop="state" label="费项名称" />
                            <el-table-column prop="address" label="金额" />
                            <el-table-column prop="zip" label="操作" />
                        </el-table>
                        <el-button :icon="Plus" style="width: 100%;" type="primary"></el-button>
                    </el-form-item>

                    <el-form-item label="担保人信息">
                        <el-table style="width: 100%">
                            <el-table-column prop="date" label="类型" />
                            <el-table-column prop="date" label="姓名" />
                            <el-table-column prop="name" label="手机号码" />
                            <el-table-column prop="state" label="关系" />
                            <el-table-column prop="address" label="证件号码" />
                            <el-table-column prop="zip" label="户籍地址" />
                            <el-table-column prop="zip" label="操作" />
                        </el-table>
                        <el-button :icon="Plus" style="width: 100%;" type="primary"></el-button>

                    </el-form-item>

                    <el-form-item label="附加条款">
                        <el-input type="textarea" placeholder="条款内容" clearable>

                        </el-input>
                    </el-form-item>
                    <!-- <h3>甲方信息</h3> -->

                    <el-row :gutter="30">
                        <el-col :span="12">
                            <el-form-item label="签约主体">
                                <el-input v-model="form.user" placeholder="签约主体" clearable />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="机构名称">
                                <el-input v-model="form.user" placeholder="机构名称" clearable />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item label="联系电话">
                        <el-input style="width: 16rem;" v-model="form.user" placeholder="联系电话" clearable />
                    </el-form-item>
                    <el-form-item label="机构地址">
                        <el-input type="textarea" v-model="form.user" placeholder="机构地址" clearable />
                    </el-form-item>
                    <el-form-item label="签约日期">
                        <el-date-picker v-model="form.date" type="date" placeholder="签约日期" />
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input type="textarea" v-model="form.user" placeholder="备注" clearable />
                    </el-form-item>
                </div>
                <div :ref="el => sectionRefs[4] = el" class="section">
                    <h2>分配护工</h2>
                    <el-table style="width: 100%">
                        <el-table-column fixed prop="city" label="护工姓名" />
                        <el-table-column prop="date" label="电话" />
                        <el-table-column prop="name" label="年龄" />
                        <el-table-column prop="state" label="性别" />
                        <el-table-column prop="address" label="任务" />
                        <el-table-column prop="zip" label="分配时间" />
                        <el-table-column prop="zip" label="操作人员" />
                        <el-table-column prop="zip" label="操作" />
                    </el-table>
                    <el-button :icon="Plus" style="width: 100%;" type="primary"></el-button>

                </div>
                <div :ref="el => sectionRefs[5] = el" class="section">
                    <h2>分配设备</h2>
                    <el-table style="width: 100%">
                        <el-table-column fixed prop="city" label="设备名称" />
                        <el-table-column prop="date" label="产品序列号" />
                        <el-table-column prop="name" label="位置" />
                        <el-table-column prop="state" label="最新上线时间" />
                        <el-table-column prop="zip" label="分配时间" />
                        <el-table-column prop="zip" label="操作人员" />
                        <el-table-column prop="zip" label="操作" />
                    </el-table>
                    <el-button :icon="Plus" style="width: 100%;" type="primary"></el-button>

                </div>
            </el-form>


            <!-- 占位符，确保最后一个Section也能滚动到顶部 -->
            <div class="spacer"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { Back, Plus, Select, Refresh, Search } from '@element-plus/icons'

const form = ref({

})

// 定义章节数据，每个章节包含标题和内容
const sections = ref([
    { name: '老人信息', content: 'This is section 1' },
    { name: '入住信息', content: 'This is section 2' },
    { name: '监护人信息', content: 'This is section 3' },
    { name: '签订合同', content: 'This is section 4' },
    { name: '分配护工', content: 'This is section 4' },
    { name: '分配设备', content: 'This is section 4' },
]);

// 存储各个section的DOM引用
const sectionRefs = ref([]);
// 右侧滚动区域的引用
const contentRef = ref(null);
// 记录当前选中的Tab索引
const activeIndex = ref(0);

// 处理点击Tab，滚动到对应的Section顶部
const scrollToSection = (index) => {
    if (sectionRefs.value[index]) {
        const contentTop = contentRef.value.offsetTop;
        const targetOffset = sectionRefs.value[index].offsetTop - contentTop;
        contentRef.value.scrollTo({ top: targetOffset, behavior: 'smooth' });
    }
};

// 监听滚动，动态更新当前选中的Tab
const onScroll = () => {
    const scrollTop = contentRef.value.scrollTop;
    let currentActive = 0;
    sectionRefs.value.forEach((el, index) => {
        if (el.offsetTop - contentRef.value.offsetTop <= scrollTop) {
            currentActive = index;
        }
    });
    activeIndex.value = currentActive;
};
</script>

<style scoped>
.container {
    display: flex;
    height: 100%;
    box-sizing: border-box;
    background-color: var(--system-container-background);
}

/* 左侧Tab栏样式 */
.tabs {
    width: 200px;
    /* border-right: 1px solid #ddd; */
    /* padding: 20px; */
    text-align: right;
    padding-top: 20px;
}

.tab {
    padding: 20px;
    cursor: pointer;
}

.tab.active {
    font-weight: bold;
    color: blue;
    background-color: var(--system-container-main-background);
}

/* 右侧内容区域样式 */
.content {
    flex: 1;
    overflow-y: auto;
    height: 100%;
    /* padding: 20px; */
    position: relative;
    background-color: var(--system-container-main-background);
}

/* 章节样式 */
.section {
    /* height: 300px; */
    padding: 20px;
    /* border-bottom: 1px solid #ddd; */
}

/* 空间占位，保证最后一个Section能滚动到顶部 */
.spacer {
    height: 30%;
}
</style>

<style lang="scss" scoped>
.record-add {
    padding: 0 20px 0 20px;
}

.record-add-title {

    position: sticky;
    bottom: 0px;
    margin-top: 20px;

    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: var(--system-container-main-background);
    box-shadow: var(--el-box-shadow-light);

    .record-add-title-back {
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: green;

        &:hover {
            cursor: pointer;
        }
    }
}

.record-add-body {
    flex: 1;
    overflow: auto;
    text-align: left;

    .record-add-body-item {
        margin-top: 20px;

        .record-add-body-item-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}

.text-center {
    text-align: center;
}

.record-add-body-basic {
    display: flex;
    flex-direction: row;

    .record-add-basic-image {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 40px;

        .avatar-uploader {
            border: 1px dashed var(--el-border-color);
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: var(--el-transition-duration-fast);
        }

    }

    .record-add-basic-form {
        flex: 1;
        padding: 0 40px 0 0px;
    }
}

.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.avatar-uploader :hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}

.el-alert-content {
    display: flex;
    justify-content: space-between;
}
</style>