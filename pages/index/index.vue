<template>
	<view class="content">
		<view>
			<view style="display: flex;">
				<view style="width: 200rpx;height: 200rpx;background-color: #C8C7CC;"></view>
				<view>
					<view style="display: flex;">
						<view>朱桐桐</view>
						<view class="font">/ 先生</view>
						<view class="font"><van-icon name="gift-o"/></view>
					</view>
					<view class="font" style="display: flex;align-items: center;">25岁 | 工作5年 | 济南-历下区</view>
				</view>
			</view>
			
			<view style="display: flex;" class="panding">
				<view><van-icon name="gift-o"/></view>
				<view style="margin-left: 8px;">18321018570</view>
			</view>
			<view style="display: flex;" class="panding">
				<view><van-icon name="gift-o"/></view>
				<view style="margin-left: 8px;">zttongdeyx@126.com</view>
			</view>
			
			<view style="display: flex;margin-top: 20px;align-items: flex-end;" class="panding">
				<view>求职意向</view>
				<view style="font-size: 10px;margin-left: 10px;color: #DD524D;">必填</view>
				<view style="font-size: 11px;margin-left: 20px;color: #007AFF;">管理</view>
			</view>
			<view style="display: flex;" class="panding">
				<view><van-icon name="gift-o"/></view>
				<view class="font" style="margin-left: 8px;">周内到岗</view>
			</view>
			<view style="display: flex;" class="panding">
				<view><van-icon name="gift-o"/></view>
				<view class="font" style="margin-left: 8px;">软件工程师</view>
			</view>
			<view style="display: flex;" class="panding">
				<view><van-icon name="gift-o"/></view>
				<view class="font" style="margin-left: 8px;">Java,前台，db</view>
			</view>
			
			<view style="display: flex;margin-top: 20px;align-items: flex-end;" class="panding">
				<view>工作/实习经历</view>
				<view style="font-size: 11px;margin-left: 20px;color: #007AFF;">添加</view>
			</view>
			<view style="display: flex;" class="panding">
				<view><van-icon name="gift-o"/></view>
				<view class="font" style="margin-left: 8px;">济南比特麒麟科技有限公司</view>
			</view>
			<view style="display: flex;" class="panding">
				<view class="font" style="color: #999999;">2018.09-至今</view>
			</view>
			<view style="display: flex;" class="panding">
				<view  style="font-size: 16;color: #2C405A;">java开发工程师</view>
				<view  style="margin-left: 28px;">8千-1万</view>
			</view>
			<view style="display: flex;" class="panding">
				<view class="font">java</view>
				<view class="font" style="margin-left: 12px;">myysql</view>
				<view class="font" style="margin-left: 12px;">vue</view>
				<view class="font" style="margin-left: 12px;">后端开发</view>
			</view>
			<view style="display: flex;" class="panding">
				<view class="font">从事软件开发，包括后端，报表，移动端，还要去理业务，需求，可以熟练使用mysql</view>
			</view>
			
		</view>
	</view>
</template>

<script>
		import vanIcon from "@/wxcomponents/vant/icon/index.js"
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		components: {
			vanIcon
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		margin: 20rpx 40rpx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}
.panding{
	padding: 5px 0;
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
	.font {
		font-size: 12px;
	}
</style>
