# 設定アセット

## 概要

`WorldMascotSettingAsset`は、WorldMascotシステムの動作を定義する設定アセットです。このアセットを使用することで、マスコットの各種動作、アニメーション、ボイス、着せ替えなどを一元管理できます。

## アセットの作成

1. Projectウィンドウで右クリック
2. **Create > WorldMascot > Setting Asset** を選択
3. ファイル名を入力して保存

または、WorldMascot Setup Toolから「新規設定アセットを作成」ボタンで作成できます。

---

## 設定項目の詳細

### 1. デフォルトステート設定（Default States）

マスコットの基本的な待機状態を定義します。複数のステートを定義することで、時間帯や状況に応じて基本動作を切り替えることができます。

#### 設定項目

| 項目名 | 型 | 説明 |
|--------|-----|------|
| **State Name** | string | ステートの識別名。他の設定で参照する際に使用します |
| **State Animation** | AnimationClip | このステートでループ再生されるアイドルアニメーション |

#### 使用例

```
State Name: "Standing"
State Animation: Idle_Standing.anim

State Name: "Sitting"
State Animation: Idle_Sitting.anim
```

#### ポイント

- デフォルトステートは、他のアクションが実行されていない時に自動的に再生されます
- ランダムアクションや挨拶アクションで「特定のステートでのみ実行」を設定できます
- ステート名は他の設定で参照されるため、わかりやすい名前を付けることを推奨します
- **VRChat内では、メニューの「Idle Change」からデフォルトステートを切り替えることができます**

---

### 2. 着せ替え設定（Dress Up Sets）

マスコットの外見を変更するためのプリセットを定義します。衣装の切り替えや、アクセサリーのオン/オフなどに使用します。

#### 設定項目

| 項目名 | 型 | 説明 |
|--------|-----|------|
| **Preset Name** | string | 着せ替えプリセットの表示名 |
| **Dress Up Animation** | AnimationClip | このプリセットに切り替えるためのアニメーション |

#### 使用例

```
Preset Name: "デフォルト"
Dress Up Animation: DressUp_Default.anim

Preset Name: "夏服"
Dress Up Animation: DressUp_Summer.anim

Preset Name: "冬服"
Dress Up Animation: DressUp_Winter.anim
```

#### ポイント

- アニメーションは主にGameObjectのアクティブ状態やBlendShapeを制御するために使用します
- プレイヤーはメニューから着せ替えを選択できます
- 着せ替え状態は全プレイヤーで同期されます
- **VRChat内では、メニューの「Dress up」から着せ替えプリセットを選択できます**

#### アニメーションの作り方

1. Animationウィンドウを開く
2. 衣装オブジェクトのActive状態を記録
3. BlendShapeの値を記録（表情や体型変更など）
4. アニメーションの長さは0秒または1フレームで設定（即座に切り替わります）

---

### 3. アニメーション再生設定（Animation Play Settings）

プレイヤーがメニューから手動で実行できるアニメーションを定義します。

**VRChat内では、メニューの「Animation」からこれらのアニメーションを実行できます。**

#### 設定項目

| 項目名 | 型 | 説明 |
|--------|-----|------|
| **Animation Name** | string | メニューに表示されるアニメーション名 |
| **Main Animation** | AnimationClip | 体全体のメインアニメーション |
| **Lip Sync Animation** | AnimationClip | 口パク用のアニメーション（表情レイヤー） |
| **Facial Animation** | AnimationClip | 表情アニメーション（表情レイヤー） |
| **Animation Sound** | AudioClip | アニメーション中に再生される音声 |
| **Is Loop** | bool | アニメーションをループ再生するか |

#### 使用例

```
Animation Name: "手を振る"
Main Animation: Wave_Hand.anim
Lip Sync Animation: (なし)
Facial Animation: Smile.anim
Animation Sound: (なし)
Is Loop: false

Animation Name: "踊る"
Main Animation: Dance_Loop.anim
Lip Sync Animation: (なし)
Facial Animation: Happy.anim
Animation Sound: (なし)
Is Loop: true
```

#### ポイント

- **Main Animation**: Humanoidのボディアニメーションを設定します
- **Lip Sync Animation**: 口の動き（BlendShape）を設定します。Voiceと同期して再生されます
- **Facial Animation**: 目や眉などの表情を設定します
- **Is Loop**: チェックを入れると、もう一度ボタンを押すか別のアクションを実行するまでループします
- 各アニメーションは省略可能です（不要な場合は空欄で構いません）

#### 💡 Tips: メインアニメーションを設定しない場合

**Main Animation**を空欄にすることで、現在の体の姿勢を保持したまま、表情（Facial Animation）と口パク（Lip Sync Animation）、音声（Voice）だけを再生できます。

**活用例:**
- デフォルトステートの姿勢を維持したまま喋らせる
- 座った状態や寝た状態で表情だけ変化させる
- ループアニメーション実行中に、体の動きを中断せずに音声と表情だけ追加する

```
Animation Name: "座ったまま挨拶"
Main Animation: (空欄)
Lip Sync Animation: Talk_Greeting.anim
Facial Animation: Happy.anim
Animation Sound: Hello.wav
Is Loop: false
```

この設定により、座っている姿勢を維持したまま、表情と口パクと音声だけで挨拶することができます。

---

### 4. ランダムアクション設定（Random Action Settings）

マスコットが自動的にランダムで実行するアクションを定義します。

#### 共通設定

| 項目名 | 型 | 説明 |
|--------|-----|------|
| **Min Interval** | float | アクションを実行する最小間隔（秒） |
| **Max Interval** | float | アクションを実行する最大間隔（秒） |

#### 各アクションの設定項目

| 項目名 | 型 | 説明 |
|--------|-----|------|
| **Main Animation** | AnimationClip | 体全体のメインアニメーション |
| **Lip Sync Animation** | AnimationClip | 口パク用のアニメーション |
| **Facial Animation** | AnimationClip | 表情アニメーション |
| **Voice** | AudioClip | 再生する音声 |
| **Speech Bubble Text** | string | 吹き出しに表示するテキスト |
| **Speech Bubble Time** | float | 吹き出しを表示する時間（秒） |
| **Executable Default State** | string | このアクションを実行可能なデフォルトステート名（空の場合はいつでも実行可能） |

#### 使用例

```
[アクション1]
Main Animation: Stretch.anim
Lip Sync Animation: (なし)
Facial Animation: Tired.anim
Voice: (なし)
Speech Bubble Text: "ふぁ～、眠いなぁ..."
Speech Bubble Time: 3.0
Executable Default State: "Standing"

[アクション2]
Main Animation: Look_Around.anim
Lip Sync Animation: (なし)
Facial Animation: Curious.anim
Voice: (なし)
Speech Bubble Text: "きょろきょろ"
Speech Bubble Time: 2.0
Executable Default State: (空欄 = いつでも実行可能)
```

#### ポイント

- `Min Interval`と`Max Interval`の間でランダムな時間が経過するとアクションが実行されます
- **Executable Default State**を設定すると、特定のデフォルトステートでのみそのアクションが実行されます
  - 例: "Sitting"ステート専用のアクションを作成できます
  - 空欄の場合は全てのステートで実行可能です
- ボックスランダム方式を採用しているため、同じアクションが連続しにくくなっています
- マスコットが他のアクションを実行中の場合、ランダムアクションは実行されません

#### 💡 Tips: メインアニメーションを省略する

**Main Animation**を空欄にすることで、現在のデフォルトステートの姿勢を保持したまま、表情と口パク、音声だけを再生できます。座っている状態や寝転んでいる状態で、体の姿勢を変えずに表情だけで反応させることができます。

---

### 5. 挨拶アクション設定（Greeting Action Settings）

プレイヤーが初めてマスコットに近づいた時に実行されるアクションを定義します。

#### 設定項目

| 項目名 | 型 | 説明 |
|--------|-----|------|
| **Greeting Name** | string | 挨拶アクションの名前（内部管理用） |
| **Main Animation** | AnimationClip | 体全体のメインアニメーション |
| **Lip Sync Animation** | AnimationClip | 口パク用のアニメーション |
| **Facial Animation** | AnimationClip | 表情アニメーション |
| **Voice** | AudioClip | 再生する音声 |
| **Speech Bubble Text** | string | 吹き出しに表示するテキスト（`{0}`がプレイヤー名に置き換わります） |
| **Speech Bubble Time** | float | 吹き出しを表示する時間（秒） |
| **Trigger Distance** | float | 挨拶を実行するトリガー距離（メートル） |
| **Executable Default State** | string | このアクションを実行可能なデフォルトステート名 |
| **Look At Player** | bool | 挨拶中にプレイヤーを見つめるか |

#### 使用例

```
Greeting Name: "FirstGreeting"
Main Animation: Wave_Hand.anim
Lip Sync Animation: Talk_Greeting.anim
Facial Animation: Happy.anim
Voice: Hello.wav
Speech Bubble Text: "こんにちは、{0}さん！ようこそ！"
Speech Bubble Time: 3.0
Trigger Distance: 2.0
Executable Default State: (空欄 = いつでも実行可能)
Look At Player: true
```

#### ポイント

- **Speech Bubble Text**の`{0}`は自動的にプレイヤーの表示名に置き換わります
  - 例: "こんにちは、{0}さん！" → "こんにちは、Taroさん！"
- **Trigger Distance**: マスコットを中心とした球状のColliderの半径として設定されます
- **Look At Player**: チェックを入れると、挨拶中にマスコットがプレイヤーの頭の位置を見つめます
- **Executable Default State**: 特定のデフォルトステートでのみ挨拶を実行したい場合に設定します
- 挨拶アクションは各プレイヤーに対して1回のみ実行されます（プレイヤーが再入場すると再度実行されます）

#### 💡 Tips: メインアニメーションを省略する

**Main Animation**を空欄にすることで、現在のデフォルトステートの姿勢を保持したまま挨拶できます。例えば、座っている状態を維持したまま、表情と口パク、音声だけで挨拶することが可能です。

---

### 6. アラームアクション設定（Alarm Action Settings）

アラーム機能に関連するアクションを定義します。アラームがセットされた時と、アラームが鳴った時の2種類のアクションを設定できます。

#### アラームセット時のアクション（On Set Alarm Action）

| 項目名 | 型 | 説明 |
|--------|-----|------|
| **Lip Sync Animation** | AnimationClip | 口パク用のアニメーション |
| **Facial Animation** | AnimationClip | 表情アニメーション |
| **Voice** | AudioClip | 再生する音声 |
| **Speech Bubble Text** | string | 吹き出しに表示するテキスト |
| **Speech Bubble Time** | float | 吹き出しを表示する時間（秒） |

#### アラームが鳴った時のアクション（On Alarm Action）

| 項目名 | 型 | 説明 |
|--------|-----|------|
| **Lip Sync Animation** | AnimationClip | 口パク用のアニメーション |
| **Facial Animation** | AnimationClip | 表情アニメーション |
| **Voice** | AudioClip | 再生する音声 |
| **Speech Bubble Text** | string | 吹き出しに表示するテキスト |
| **Speech Bubble Time** | float | 吹き出しを表示する時間（秒） |

#### 使用例

```
[アラームセット時]
Lip Sync Animation: Talk_Short.anim
Facial Animation: Happy.anim
Voice: AlarmSet.wav
Speech Bubble Text: "アラームをセットしたよ！"
Speech Bubble Time: 3.0

[アラームが鳴った時]
Lip Sync Animation: Talk_Long.anim
Facial Animation: Excited.anim
Voice: AlarmRing.wav
Speech Bubble Text: "時間だよ～！起きて～！"
Speech Bubble Time: 5.0
```

#### ポイント

- アラームアクションは体のメインアニメーションを含みません（デフォルトステートを維持したまま実行されます）
- **アラームセット時**: プレイヤーがUIからアラームをセットした直後に実行されます
- **アラームが鳴った時**: 設定された時刻になると自動的に実行されます
- 各アクションは省略可能です（不要な項目は空欄で構いません）

---

## アニメーションレイヤーについて

WorldMascotは3つのアニメーションレイヤーを使用します：

### 1. Base Layer（ベースレイヤー）
- **Main Animation**が再生されるレイヤー
- 体全体の動きを制御
- Humanoidアニメーションを使用

### 2. LipSync Layer（表情レイヤー1）
- **Lip Sync Animation**が再生されるレイヤー
- 主に口の動き（BlendShape）を制御
- Voiceと同期して再生

### 3. Facial Layer（表情レイヤー2）
- **Facial Animation**が再生されるレイヤー
- 目、眉、その他の表情要素を制御
- BlendShapeアニメーションを使用

### 4. DressUp Layer (着せ替えレイヤー3)
- Dressupで着せ替えアニメーションが実行されるレイヤー
- 非表示用BlendShapeや服のオンオフ用

### レイヤーの重ね合わせ

```
DressUp
  ↓ 重ね合わせ 
Facial Animation (表情)
  ↓ 重ね合わせ
Lip Sync Animation (口パク)
  ↓ 重ね合わせ
Main Animation (体の動き)
  ↓ 結果
最終的なアニメーション
```

---

## 音声と吹き出しについて

### Voice（音声）
- AudioClipとして設定
- 自動的にマスコットの頭の位置から3D空間音声として再生されます
- Lip Sync Animationと組み合わせることで、喋っているように見せることができます

### Speech Bubble（吹き出し）
- テキストを吹き出しとして表示
- 表示時間を秒単位で指定
- プレイヤー名の埋め込み（挨拶アクションのみ）: `{0}`を使用

---

## ベストプラクティス

### 1. デフォルトステートの活用
デフォルトステートは、アクションが実行されていない時の基底モーションとして常に再生されます。以下のような用途に適しています：

```
立ちポーズ: "Standing"
座りポーズ: "Sitting"
寝転びポーズ: "Lying"
```

#### デフォルトステートとアニメーション再生機能の違い

**デフォルトステート:**
- 他のアクション終了後、自動的にこの姿勢に戻る
- アラームアクションや挨拶アクションが実行されても、基底モーションは維持される
- 姿勢を継続的に維持したい場合に使用

**アニメーション再生機能（ループ）:**
- 手動で開始・停止する必要がある
- アラームアクションや挨拶アクションが実行されると中断される
- 一時的なループアニメーションに使用

#### 活用例
「座った姿勢」をずっと維持させたい場合、デフォルトステートに"Sitting"を追加し、そのステートに切り替えることで、他のアクションが実行された後も自動的に座った姿勢に戻ります。

また、ランダムアクションで`Executable Default State`に"Sitting"を設定することで、座っている時だけ実行されるアクション（例：本を読む、あくびをする）を作成できます。

### 2. アニメーションの長さ
- システムは各アニメーションの長さを自動的に判定します
- 複数のアニメーション（Main, LipSync, Facial）を同時に使用する場合、最も長いアニメーションの長さが採用されます
- Voiceの長さも考慮されます

### 3. ループアニメーション
- ループアニメーションは、プレイヤーがもう一度ボタンを押すか、別のアクションを実行するまで継続します
- デフォルトステートのアニメーションは自動的にループします

### 4. 実行可能ステートの使い分け
- 空欄: 常に実行可能
- ステート名指定: 特定のステートでのみ実行
- 複数のデフォルトステートを作成し、状況に応じてアクションを制限することで、より自然な振る舞いを実現できます

---

## トラブルシューティング

### アニメーションが再生されない
- AnimationClipが正しく設定されているか確認
- Humanoidリグのアニメーションを使用しているか確認（Main Animationの場合）
- BlendShapeが存在するか確認（Lip Sync/Facial Animationの場合）

### 音声が再生されない
- AudioClipが正しく設定されているか確認
- VoiceAudioSourceがHeadボーンの子として配置されているか確認（Setup Toolで自動配置されます）

### ランダムアクションが実行されない
- `Min Interval`と`Max Interval`が適切に設定されているか確認
- `Executable Default State`が現在のデフォルトステートと一致しているか確認
- 他のアクションが実行中でないか確認

### 着せ替えが機能しない
- Dress Up Animationで制御するGameObjectやBlendShapeが正しく記録されているか確認
- アニメーションの長さを1フレームに設定しているか確認