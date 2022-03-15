<template lang="html">
    <!-- v-for 实现内容展示 -->
    <!-- 一级分类鼠标移上时背景变化：
        1、样式：hover
        2、js
    -->
    <div class="type-nav">
        <div class="container">
            <div @mouseenter="enterShow" @mouseleave="leaveShow">
                <!--  -->
                <h2 class="all" @click="typeNavShow">全部商品分类</h2>
                <!-- 三级联动 -->
                <transition name="sort">
                    <div class="sort" v-show="allProductsShow">
                        <div class="all-sort-list2" @click="goSearch" @mouseleave="leaveIndex">
                            <div
                                class="item"
                                v-for="(c1, index) in categoryList"
                                :key="c1.categoryId"
                            >
                                <h3
                                    @mouseenter="changeIndex(index)"
                                    :class="{ cur: currentIndex == index }"
                                >
                                    <a
                                        :data-categoryName="c1.categoryName"
                                        :data-categoryId1="c1.categoryId"
                                    >{{ c1.categoryName }}</a>
                                </h3>
                                <!-- 二级、三级分类 -->
                                <div
                                    class="item-list clearfix"
                                    :style="{ display: currentIndex == index ? 'block' : 'none' }"
                                >
                                    <div
                                        class="subitem"
                                        v-for="(c2, index) in c1.categoryChild"
                                        :key="c2.categoryId"
                                    >
                                        <dl class="fore">
                                            <dt>
                                                <a
                                                    :data-categoryName="c2.categoryName"
                                                    :data-categoryId2="c2.categoryId"
                                                >{{ c2.categoryName }}</a>
                                            </dt>
                                            <dd>
                                                <em
                                                    v-for="(c3, index) in c2.categoryChild"
                                                    :key="c3.categoryId"
                                                >
                                                    <a
                                                        :data-categoryName="c3.categoryName"
                                                        :data-categoryId3="c3.categoryId"
                                                    >{{ c3.categoryName }}</a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    name: "TypeNav",
    
}
</script>
<style lang="less">
.type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .all {
            width: 210px;
            height: 45px;
            background-color: #e1251b;
            line-height: 45px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        .nav {
            a {
                height: 45px;
                margin: 0 22px;
                line-height: 45px;
                font-size: 16px;
                color: #333;
            }
        }
        .sort {
            position: absolute;
            left: 0;
            top: 45px;
            width: 210px;
            height: 461px;
            position: absolute;
            background: #fafafa;
            z-index: 999;

            .all-sort-list2 {
                .cur {
                    background: skyblue;
                }
                .item {
                    h3 {
                        line-height: 30px;
                        font-size: 14px;
                        font-weight: 400;
                        overflow: hidden;
                        padding: 0 20px;
                        margin: 0;

                        a {
                            color: #333;
                        }
                    }

                    .item-list {
                        display: none;
                        position: absolute;
                        width: 734px;
                        min-height: 460px;
                        _height: 200px;
                        background: #f7f7f7;
                        left: 210px;
                        border: 1px solid #ddd;
                        top: 0;
                        z-index: 9999 !important;

                        .subitem {
                            float: left;
                            width: 650px;
                            padding: 0 4px 0 8px;

                            dl {
                                border-top: 1px solid #eee;
                                padding: 6px 0;
                                overflow: hidden;
                                zoom: 1;

                                &.fore {
                                    border-top: 0;
                                }

                                dt {
                                    float: left;
                                    width: 54px;
                                    line-height: 22px;
                                    text-align: right;
                                    padding: 3px 6px 0 0;
                                    font-weight: 700;
                                }

                                dd {
                                    float: left;
                                    width: 415px;
                                    padding: 3px 0 0;
                                    overflow: hidden;

                                    em {
                                        float: left;
                                        height: 14px;
                                        line-height: 14px;
                                        padding: 0 8px;
                                        margin-top: 5px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }

                    // &:hover {
                    //     .item-list {
                    //         display: block;
                    //     }
                    // }
                }
            }
        }
        .sort-enter {
            height: 0px;
        }
        .sort-enter-to {
            height: 461px;
        }
        .sort-enter-active {
            transition: all 0.2s linear;
        }
    }
}
</style>