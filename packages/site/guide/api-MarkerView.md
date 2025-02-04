### **七、自定义MarkerView传入**

```typescript

@State customUiInfo: CustomUiInfo = new CustomUiInfo(90, 50);
        
@Builder customUi() {
   // 是否在图表content内
   if (this.customUiInfo.isInbounds && this.customUiInfo.data) {
      Column() {
        Text(`2023-12-15`).fontColor(Color.Gray).fontSize(12).fontWeight(FontWeight.Bold)
        Text(`X: ${this.customUiInfo.data.getX()}`).fontColor(Color.Gray).fontSize(12)
        Text(`Y: ${this.customUiInfo.data.getY()}`).fontColor(Color.Gray).fontSize(12)
      }
   .padding(4)
      .borderRadius(6)
      .border({ width: 1, color: Color.Orange})
      .backgroundColor(0xf0f0f0)
      .width(this.customUiInfo.width)
      .height(this.customUiInfo.height)
      .margin({ left: this.customUiInfo.x, top: this.customUiInfo.y })
      .alignItems(HorizontalAlign.Start)
      .onClick(ev => {
         this.customUiInfo.showUi = false;
      })
   }
}


BarChart({ model: this.model,
   // 自定义 ui: 传入 builder
   customUiBuilder: this.customUi,
   // 通过什么事件触发
   customUiTriggerEvent: EventType.SingleTap,
   // 自定义ui的位置信息
   customUiInfo: this.customUiInfo,
})
```
