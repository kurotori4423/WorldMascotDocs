# リップシンクアニメーションを作成する方法

同梱している`OVRLipSyncSequenceConverter`を使用して、音声からリップシンクアニメーションを作ることができます。

## 導入

前提アセットとして[こちら](https://developers.meta.com/horizon/downloads/package/oculus-lipsync-unity?locale=ja_JP)をダウンロードして`OculusLipSync.unitypackage`をプロジェクトにインポートします。

その後、`OVRLipSyncSequenceConverter.unitypackage`をインポートしてください。

## 使い方


まず、Unityのプロジェクトウィンドウ上で、変換したい`AudioClip`を選択して、`Oculus` > `Lip Sync`> `Generate Lip Sync Assets`を選択します。
すると、音声ファイルから`OVRLipSyncSequence`アセットが生成されます。

シーン上にアバターを配置します。

次に、`Kurotori` > `OVR Lip Sync` > `Sequence To BlendShape Animation`を選択します。

`Target Renderer`にアバターのリップシンクBlendShapeが含まれているメッシュを割り当てます。
`Animation Root`にアバターのアニメーターがついているルートオブジェクトを設定します。

`Create Profile Asset...`ボタンをおしてプロファイルを作成します。このプロファイルはリップシンクアニメーションの対応付けを保存するアセットです。
`Auto Fill From Renderer`ボタンを押すと、VRChatの標準的なリップシンクアニメーションを付けている場合は自動で割り当てが設定されます。

`Lip Sync Sequences`に先ほど作成した`OVRLipSyncSequence`アセットをドラッグ＆ドロップします。一度に複数登録することができます。

`Generate All Animation Clips`を実行すると、リップシンクアニメーションが生成され、設定されたフォルダにエクスポートされます。