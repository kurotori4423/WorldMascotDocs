# 接触リアクションの設定

World Mascotシステムでは、プレイヤーとマスコットの接触に応じてアニメーションや音声を再生する機能が用意されています。このドキュメントでは、`PhysBoneTriggerAction`と`ContactAction`の2つのコンポーネントについて説明します。

## PhysBoneTriggerAction

### PhysBoneTriggerAction 概要

`PhysBoneTriggerAction`は、VRChat PhysBoneコンポーネントと連携し、プレイヤーがPhysBoneをつかんだ際にマスコットのリアクションを発動させるコンポーネントです。

**必須コンポーネント:**
- `VRCPhysBone`

**主な機能:**
- PhysBoneのグラブ検出
- 一定時間つかみ続けた際のアクション発動
- プレイヤーへの視線追従（LookAt）
- ボックスランダム方式でのアクション選択
- デフォルトステート別のアクション制限

### PhysBoneTriggerAction 基本設定

| パラメータ | 型 | 説明 |
|-----------|-----|------|
| **Trigger Grabbing Time** | `float` | PhysBoneをつかんでからアクションが発動するまでの時間（秒）。デフォルト: 3.0秒 |
| **Action Name** | `string` | このアクションセットの識別名。登録される各アクションは `{actionName}_{index}` という形式で命名されます |

### PhysBoneTriggerAction アクション要素の設定

インスペクタでは「**Phys Bone Actions**」という名前のリストが表示され、各アクションパターンは1つの要素としてまとめられています。リストの`+`ボタンで要素を追加、`-`ボタンで削除できます。要素をドラッグして順序を変更することも可能です。

各アクション要素には以下のフィールドがあります:

| フィールド | 型 | 説明 |
|-----------|-----|------|
| **Animation Clip** | `AnimationClip` | メインのボディアニメーション（必須） |
| **Lip Sync Clip** | `AnimationClip` | リップシンクアニメーション（オプション） |
| **Facial Clip** | `AnimationClip` | 表情アニメーション（オプション） |
| **Voice Clip** | `AudioClip` | 再生する音声クリップ（オプション） |
| **Speech Text** | `string` | 表示する吹き出しテキスト（オプション） |
| **Speech Duration** | `float` | 吹き出しの表示時間（秒）（オプション） |
| **Look At Enable** | `bool` | このアクションでLookAtを有効にするか |
| **Allowed Default State** | `string` | このアクションを実行可能なデフォルトステート名。空の場合はすべてのステートで実行可能 |

> **注意:** すべての配列は自動的に同期されます。配列サイズの不整合があった場合は、エラーメッセージが表示され、「自動修正」ボタンで修正できます。

### PhysBoneTriggerAction 使用例

**1. 基本的なセットアップ**

1. マスコットモデルのしっぽや耳などのGameObjectに`VRCPhysBone`コンポーネントを追加
2. 同じGameObjectに`PhysBoneTriggerAction`コンポーネントを追加
3. 基本パラメータを設定:
   - **Action Name**: 例 `"TailPat"` 
   - **Trigger Grabbing Time**: 例 `2.0` （2秒つかみ続けると発動）

**2. アクションパターンの追加**

「Phys Bone Actions」リストの右下にある`+`ボタンをクリックして、アクション要素を追加します。

3つのパターンを設定する例:

```
[要素 0]
Animation Clip: TailPat_Happy
Lip Sync Clip: LipSync_Happy
Facial Clip: (オプション)
Voice Clip: Voice_Happy.wav
Speech Text: "嬉しいな♪"
Speech Duration: 2.5
Look At Enable: true
Allowed Default State: (空欄 - すべてのステートで実行可能)

[要素 1]
Animation Clip: TailPat_Shy
Lip Sync Clip: LipSync_Shy
Facial Clip: (オプション)
Voice Clip: Voice_Shy.wav
Speech Text: "え、えへへ..."
Speech Duration: 2.5
Look At Enable: true
Allowed Default State: (空欄)

[要素 2]
Animation Clip: TailPat_Surprised
Lip Sync Clip: LipSync_Surprised
Facial Clip: (オプション)
Voice Clip: Voice_Surprised.wav
Speech Text: "わっ！"
Speech Duration: 2.0
Look At Enable: true
Allowed Default State: (空欄)
```

**3. ステート限定アクションの設定**

特定のデフォルトステート（アイドルモーション）でのみ実行されるアクションを設定できます。**Allowed Default State**フィールドにステート名を入力します:

```
[要素 0]
Allowed Default State: (空欄 - すべてのステートで実行可能)

[要素 1]
Allowed Default State: Sitting (座っているステートでのみ実行)

[要素 2]
Allowed Default State: Sleeping (寝ているステートでのみ実行)
```

---

## ContactAction

### ContactAction 概要

`ContactAction`は、VRChat Contact Receiverコンポーネントと連携し、プレイヤーの手や体がContactコライダーに触れた際にマスコットのリアクションを発動させるコンポーネントです。

**必須コンポーネント:**
- `VRCContactReceiver`

**主な機能:**
- Contact Receiverとの接触検出
- 一定時間接触し続けた際のアクション発動
- プレイヤーへの視線追従（LookAt）
- ボックスランダム方式でのアクション選択
- デフォルトステート別のアクション制限

### ContactAction 基本設定

インスペクタで表示される基本パラメータ:

| パラメータ | 型 | 説明 |
|-----------|-----|------|
| **Contact Action Name** | `string` | このアクションセットの識別名。登録される各アクションは `{contactActionName}_{index}` という形式で命名されます |

> **注意:** 接触してからアクションが発動するまでの時間は、スクリプトの `contactActivateTime` フィールドで定義されていますが（デフォルト: 3.0秒）、インスペクタには表示されません。変更が必要な場合はスクリプトを直接編集してください。

### ContactAction アクション要素の設定

インスペクタでは「**Contact Reactions**」という名前のリストが表示され、各アクションパターンは1つの要素としてまとめられています。リストの`+`ボタンで要素を追加、`-`ボタンで削除できます。要素をドラッグして順序を変更することも可能です。

各アクション要素には以下のフィールドがあります:

| フィールド | 型 | 説明 |
|-----------|-----|------|
| **Animation** | `AnimationClip` | メインのボディアニメーション（必須） |
| **LipSync Animation** | `AnimationClip` | リップシンクアニメーション（オプション） |
| **Facial Animation** | `AnimationClip` | 表情アニメーション（オプション） |
| **Sound** | `AudioClip` | 再生する音声クリップ（オプション） |
| **Message** | `string` | 表示する吹き出しテキスト（オプション） |
| **Duration** | `float` | 吹き出しの表示時間（秒）（オプション） |
| **Look At Enable** | `bool` | このアクションでLookAtを有効にするか |
| **Allowed Default State** | `string` | このアクションを実行可能なデフォルトステート名。空の場合はすべてのステートで実行可能 |

インスペクタには以下の補助機能があります:

- **配列サイズ情報**: すべての配列の現在のサイズが表示されます
- **配列を手動同期**: 配列の不整合が発生した場合に手動で同期するボタン
- **自動修正**: 配列サイズの不整合がある場合、自動的に最大サイズに合わせて修正するボタン

> **注意:** すべての配列は自動的に同期されます。要素の追加・削除時に全配列で同じ操作が実行されます。

### ContactAction 使用例

**1. 基本的なセットアップ**

1. マスコットモデルの頭や手などのGameObjectに`VRCContactReceiver`コンポーネントを追加
2. Contact Receiverの設定を行う（Collision Tagsなど）
3. 同じGameObjectまたは親GameObjectに`ContactAction`コンポーネントを追加
4. 基本パラメータを設定:
   - **Contact Action Name**: 例 `"HeadPat"`
   - **Contact Activate Time**: 例 `2.5` （2.5秒接触し続けると発動）

**2. アクションパターンの追加**

「Contact Reactions」リストの右下にある`+`ボタンをクリックして、アクション要素を追加します。

複数のパターンを設定する例:

```
[要素 0]
Animation: HeadPat_Happy
LipSync Animation: LipSync_Happy
Facial Animation: Face_Happy
Sound: Voice_Happy.wav
Message: "わーい♪"
Duration: 2.0
Look At Enable: true
Allowed Default State: (空欄 - すべてのステートで実行可能)

[要素 1]
Animation: HeadPat_Comfortable
LipSync Animation: LipSync_Comfortable
Facial Animation: Face_Comfortable
Sound: Voice_Comfortable.wav
Message: "気持ちいいな..."
Duration: 3.0
Look At Enable: true
Allowed Default State: Sitting (座っているときのみ)

[要素 2]
Animation: HeadPat_Sleepy
LipSync Animation: (なし)
Facial Animation: Face_Sleepy
Sound: (なし)
Message: "zzz..."
Duration: 2.5
Look At Enable: false
Allowed Default State: Sleeping (寝ているときのみ)
```

**3. 複数の接触ポイントの設定**

マスコットの複数の部位にContactActionを設定できます:

- **頭**: 頭をなでたときの反応
- **手**: 手を握ったときの反応
- **背中**: 背中をさすったときの反応

それぞれ異なる`Contact Action Name`を設定し、部位に応じた適切なアニメーションを設定します。

---

## 共通機能

### ボックスランダム選択

両コンポーネントとも、**ボックスランダム方式**でアクションを選択します。これは、配列内のすべてのアクションが一度ずつ実行されるまで同じアクションが選ばれないことを保証する仕組みです。

- すべてのアクションが1回ずつ実行されると、配列が再シャッフルされます
- 連続して同じアクションが実行されることを防ぎます
- より多様なリアクションをプレイヤーに提供できます

### デフォルトステート制限

`Allowed Default State`フィールドを使用することで、特定のアイドルモーション状態でのみ実行されるアクションを設定できます。

**動作:**
- 空欄: すべてのデフォルトステートで実行可能
- ステート名指定: 指定したステート名と現在のデフォルトステートが一致する場合のみ実行可能
- デフォルトステートが変更されると、実行可能なアクションのみで新しいシャッフルテーブルが生成されます

**設定例:**

各要素の**Allowed Default State**フィールドに以下のように設定:

```
[要素 0]
Allowed Default State: (空欄) - いつでも実行可能

[要素 1]
Allowed Default State: Sitting - 座っているときのみ

[要素 2]
Allowed Default State: Standing - 立っているときのみ

[要素 3]
Allowed Default State: Sleeping - 寝ているときのみ
```

### LookAt機能

`Look At Enable`フィールドで有効化すると、アクション実行中にマスコットがプレイヤーの頭部位置を追跡します。

**設定方法:**
1. 対応するアクション要素の`Look At Enable`をチェック
2. `Look At Target`オブジェクトは「Setup World Mascot」実行時に自動生成されます
3. アクション実行中、Targetがプレイヤーの頭部位置に自動更新されます

### 配列の自動同期

**重要:** 両コンポーネントとも、インスペクタでは配列が自動的に同期されます。

- 要素を追加すると、すべての関連配列に新しい要素が追加されます
- 要素を削除すると、すべての関連配列から対応する要素が削除されます
- 配列サイズに不整合がある場合、エラーメッセージと「自動修正」ボタンが表示されます

インスペクタの下部に各配列のサイズ情報が表示されるため、整合性を簡単に確認できます。

### ネットワーク同期

両コンポーネントは以下の情報をネットワーク同期します:

- **PhysBoneTriggerAction**: つかんだプレイヤーのID
- **ContactAction**: 接触したプレイヤーのID

これにより、すべてのプレイヤーが同じアクションとLookAtの動作を見ることができます。

### セットアップ補助

`WorldMascotSystem`の「Setup World Mascot」メニューを実行すると、以下が自動的に行われます:

1. マスコット配下のすべての`PhysBoneTriggerAction`と`ContactAction`を検出
2. 各コンポーネントに`WorldMascotSystem`の参照を設定
3. 必要な`Look At Target`オブジェクトを自動生成
4. 配列の長さを自動同期

---

## トラブルシューティング

### アクションが発動しない

1. **必須コンポーネントを確認**: 
   - `PhysBoneTriggerAction` → `VRCPhysBone`が同じGameObjectに必要
   - `ContactAction` → `VRCContactReceiver`が同じGameObjectに必要
2. **WorldMascotSystemの参照**: Setupが正しく実行されているか確認
3. **Allowed Default State**: 現在のステートで実行可能なアクションが存在するか確認
4. **アニメーションの設定**: 最低でも`Animation Clip`または`Animation`フィールドが設定されているか確認

### LookAtが機能しない

1. **Look At Enable**: 対応する要素の`Look At Enable`がチェックされているか確認
2. **Look At Target**: 自動生成されているか確認（「Setup World Mascot」を再実行）
3. **アクション実行中か確認**: LookAtはアクション実行中のみ機能します

### 配列サイズの警告が表示される

1. Unityエディタで対象のコンポーネントを選択
2. インスペクタに表示される「**自動修正（最大サイズに合わせる）**」ボタンをクリック
3. または「**配列を手動同期**」ボタンをクリック
4. それでも解決しない場合は、`WorldMascotSystem`の「Setup World Mascot」メニューを実行

### インスペクタで要素が正しく表示されない

1. Unityエディタを再起動
2. UdonSharpのコンパイルを実行
3. 対象のGameObjectを一度選択解除してから再選択

---

## まとめ

- **PhysBoneTriggerAction**: PhysBoneをつかんだときのリアクション
- **ContactAction**: Contactコライダーに触れたときのリアクション
- 両コンポーネントともボックスランダム方式で多様なリアクションを提供
- デフォルトステート制限により、状況に応じたアクションの切り替えが可能
- LookAt機能でプレイヤーとのインタラクションがより自然に
- セットアップ補助機能により、簡単に設定可能
