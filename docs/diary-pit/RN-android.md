# `React Native` 小白安卓开发历险记

从0开始是，使用 `React Native` 进行 `android` 程序开发。此文主要记录开发过程中踩过的一些坑和一些开发注意事项。因为并没有适配 `IOS` 机型，所有这里均不考虑 `IOS` 系统兼容问题。
有机会刷完 `IOS` 副本，再做记录。

## 启动屏开发设置之 `react-native-splash-screen`

[仓库地址](https://github.com/crazycodeboy/react-native-splash-screen)

首先按照文档进行安装使用 (android)

- 第一步 `npm i react-native-splash-screen --save` 安装相关 `NPM` 包

- 第二步 在 `android/app/build.gradle` 文件中, 将 `:react-native-splash-screen` 项目添加为编译时依赖项：
  
```
...
dependencies {
    ...
    implementation project(':react-native-splash-screen')
}
```

- ⚠️ 第三步 注意此处有坑！！！按照官方文档的步骤，会让我们在 `MainApplication` 中注册该包，然后在后面的步骤都完成之后，程序启动正常。BUT！！！

到启动屏关闭之后就出现惊悚的血红色背景和苍白的错误文案：

![img](./images/rn-android-1.webp)

简单解释下就是，我们获取插件的方法在 `MainApplication` 中重写了两次，该 `Android` 包已经在 `PackageList` 中了，所以就不需要再自己手动添加注册包了。所以这里就可以省略掉文档中在`MainApplication` 文件中注册的操作了。（猜测可能是版本更新导致已经自动注册了～）

- 第四步 开始配置插件, 通过更改 `MainActivity.java` 使用 `react-native-splash-screen`
  
``` java
import android.os.Bundle; // here
import com.facebook.react.ReactActivity;
// react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen; // here
// react-native-splash-screen < 0.3.1
import com.cboy.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {
   @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }
    // ...other code
}
```