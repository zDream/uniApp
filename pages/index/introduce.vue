<template>
	<view class="content">
		<view style="width: 100%;">
			<van-row>
		  <van-col span="8">
				<view style="width: 200rpx;height: 200rpx;"></view>
			</van-col>
		  <van-col span="16">
				<view>
					<view style="display: flex;">
						<view>朱桐桐</view>
						<view style="font-size: 11px;align-items:flex-end;display: flex;margin-left: 20rpx;">先生</view>
						<view style="font-size: 11px;align-items:flex-end;display: flex;margin-left: 20rpx;"><van-icon name="smile-o"/></view>
					</view>
					<view style="font-size: 12px;margin-top: 12px;">25岁 | 工作5年 | 济南历下区</view>
				</view>
			</van-col>
		</van-row>
		<van-row>
		  <van-col span="2"><van-icon name="gift-o"/></van-col>
		  <van-col span="22" >18321018570</van-col>
		</van-row>
		<van-row style="margin-top: 12px;">
		  <van-col span="2"><van-icon name="gift-o"/></van-col>
		  <van-col span="22" >zttongdeyx@126.com</van-col>
		</van-row>
		
		<van-row>
		  <van-col>求职意向</van-col>
		</van-row>
		<van-row>
		  <van-col span="2"><van-icon name="gift-o"/></van-col>
		  <van-col span="22" >月内到岗</van-col>
		</van-row>
		<van-row>
		  <van-col span="2"><van-icon name="gift-o"/></van-col>
		  <van-col span="22" >软件工程师</van-col>
		</van-row>
		<van-row>
		  <van-col span="2"><van-icon name="gift-o"/></van-col>
		  <van-col span="22" >Java</van-col>
		</van-row>
		
		
		
		</view>
	</view>
</template>

<script>
	import uniCard from '@/components/uni-card/uni-card.vue'
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	
	import vanRow from "@/wxcomponents/vant/row/index.js"
	import vanCol from "@/wxcomponents/vant/col/index.js"
	import vanIcon from "@/wxcomponents/vant/icon/index.js"
	// import vanButton from "@/wxcomponents/vant/button/index.js"
	export default {
		data() {
			return {
				title:"个人简介22"
			}
		},
		components: {
			uniCard,
			uniCollapse,
			uniCollapseItem,
			uniList,uniListItem
			,vanRow,vanCol,vanIcon
		},
		methods: {
			change(){
				console.log("change")
			}
		}
	}
</script>

<style>
.content {
	margin: 20rpx 40rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		/* display: flex;
		flex: 1;
		flex-direction: column; */
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
