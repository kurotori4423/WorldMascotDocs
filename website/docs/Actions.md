# WorldMascot Action Components

このドキュメントでは、`WorldMascot`システムで使用される主要な`Action`コンポーネントについて解説します。

---

# AlarmAction

`AlarmAction`は、指定した時刻にマスコットが特定のアクションを実行するアラーム機能を提供します。

## 概要

このコンポーネントは、ワールドの現在時刻を監視し、設定されたアラーム時刻になると、登録されたアニメーション、音声、およびメッセージを再生します。アラームの設定や状態は、連携する`AlarmSettingUI`を通じてプレイヤーが操作できます。アラーム時刻やON/OFFの状態は、インスタンス内の全プレイヤーで同期されます。

## パラメータ

インスペクターで設定可能なパラメータは以下の通りです。

| パラメータ | 型 | 説明 |
| :--- | :--- | :--- |
| **Mascot System** | `WorldMascotSystem` | 連携する`WorldMascotSystem`のインスタンス。 |
| **Alarm Setting UI** | `AlarmSettingUI` | アラームの設定を行うUIのインスタンス。 |
| **Alarm Set Voice Settings** | | アラームが設定された際に再生されるアクションの設定。 |
| 　**Alarm Set Action Name** | `string` | アラーム設定時に登録されるアクションの名前。 |
| 　**Alarm Set Lip Sync Animation** | `AnimationClip` | アラーム設定時に再生する口パクアニメーション。 |
| 　**Alarm Set Facial Animation** | `AnimationClip` | アラーム設定時に再生する表情アニメーション。 |
| 　**Alarm Set Sound** | `AudioClip` | アラーム設定時に再生する音声。 |
| 　**Alarm Set Message** | `string` | アラーム設定時に表示する吹き出しのメッセージ。 |
| 　**Alarm Set Message Duration** | `float` | 上記メッセージの表示時間（秒）。 |
| **Alarm Voice Settings** | | アラームが作動した際に再生されるアクションの設定。 |
| 　**Alarm Action Name** | `string` | アラーム作動時に登録されるアクションの名前。 |
| 　**Alarm Lip Sync Animation** | `AnimationClip` | アラーム作動時に再生する口パクアニメーション。 |
| 　**Alarm Facial Animation** | `AnimationClip` | アラーム作動時に再生する表情アニメーション。 |
| 　**Alarm Sound** | `AudioClip` | アラーム作動時に再生する音声。 |
| 　**Alarm Message** | `string` | アラーム作動時に表示する吹き出しのメッセージ。 |
| 　**Alarm Message Duration** | `float` | 上記メッセージの表示時間（秒）。 |

---

# ContactAction

`ContactAction`は、プレイヤーがマスコットの特定部位（`VRCContactReceiver`が設定されたオブジェクト）に触れることで、マスコットがアクションを実行する機能を提供します。

## 概要

このコンポーネントは、`VRCContactReceiver`を使用してプレイヤーとの接触を検知します。一定時間以上接触が続くと、登録された複数のアクションの中からランダムに一つが選択され、再生されます。再生されるアクションは、マスコットの現在の`DefaultState`に応じてフィルタリングすることが可能です。

## パラメータ

インスペクターでは、以下のパラメータを持つアクションをリストで管理します。

| パラメータ | 型 | 説明 |
| :--- | :--- | :--- |
| **Contact Action Name** | `string` | このコンポーネントで登録されるアクションのベース名。 |
| **Contact Activate Time** | `float` | アクションを発動するために必要な接触時間（秒）。 |
| **Contact Animations** | `AnimationClip` | 接触時に再生されるアニメーション。 |
| **Contact Lip Sync Animations** | `AnimationClip` | 接触時に再生される口パクアニメーション。 |
| **Contact Facial Animations** | `AnimationClip` | 接触時に再生される表情アニメーション。 |
| **Contact Sound** | `AudioClip` | 接触時に再生される音声。 |
| **Contact Message** | `string` | 接触時に表示される吹き出しメッセージ。 |
| **Contact Message Duration** | `float` | 上記メッセージの表示時間。 |
| **Look At Enables** | `bool` | アクション再生中に、接触したプレイヤーの方向を向くかどうか。 |
| **Allowed Default States** | `string` | このアクションが再生可能となる`DefaultState`の名前。空の場合はどのステートでも再生可能です。 |

---

# GreetingAction

`GreetingAction`は、プレイヤーが特定のエリアに初めて入ったときに、マスコットが挨拶のアクションを実行する機能を提供します。

## 概要

このコンポーネントは、アタッチされたオブジェクトの`Collider`（トリガー設定が必要）にプレイヤーが侵入したことを検知します。プレイヤーがワールドに入ってから最初にそのエリアに侵入した際に、一度だけ挨拶のアクションを再生します。挨拶のメッセージには、プレイヤーの名前を埋め込むことができます。

## パラメータ

インスペクターで設定可能なパラメータは以下の通りです。

| パラメータ | 型 | 説明 |
| :--- | :--- | :--- |
| **First Greeting Name** | `string` | 挨拶アクションの名前。 |
| **First Greeting Animation** | `AnimationClip` | 挨拶時に再生するアニメーション。 |
| **First Greeting Lip Sync Animation** | `AnimationClip` | 挨拶時に再生する口パクアニメーション。 |
| **First Greeting Facial Animation** | `AnimationClip` | 挨拶時に再生する表情アニメーション。 |
| **First Greeting Voice** | `AudioClip` | 挨拶時に再生する音声。 |
| **First Greeting Speech Bubble** | `string` | 挨拶時に表示する吹き出しのメッセージ。`{0}`を記述すると、プレイヤーの名前に置き換えられます。 |
| **First Greeting Speech Bubble Duration** | `float` | 上記メッセージの表示時間（秒）。 |
| **Allowed Default State** | `string` | このアクションが再生可能となる`DefaultState`の名前。空の場合はどのステートでも再生可能です。 |
| **Look At Target** | `Transform` | 挨拶中にマスコットが向くターゲット。通常はプレイヤーの頭部位置を追従するためのオブジェクトを指定します。 |

---

# MascotAnimationPlayAction

`MascotAnimationPlayAction`は、UIボタンなどを通じて、マスコットに任意のアニメーションを再生させる機能を提供します。

## 概要

このコンポーネントは、複数のアニメーション、音声、メッセージなどをリストとして登録し、外部からの呼び出し（例：UIボタンのクリック）に応じて特定のアクションを再生します。ループ再生にも対応しており、再生中のループアニメーションを停止させることも可能です。

## パラメータ

インスペクターでは、以下のパラメータを持つアニメーションをリストで管理します。

| パラメータ | 型 | 説明 |
| :--- | :--- | :--- |
| **Animation Names** | `string` | 各アニメーションの名前。UIのボタンラベルなどに使用されます。 |
| **Animation Clips** | `AnimationClip` | 再生するメインアニメーション。 |
| **LipSync Animation Clips** | `AnimationClip` | 再生する口パクアニメーション。 |
| **Facial Animation Clips** | `AnimationClip` | 再生する表情アニメーション。 |
| **Animation Sounds** | `AudioClip` | 再生する音声。 |
| **Loops** | `bool` | 各アニメーションをループ再生するかどうか。 |

---

# PhysBoneTriggerAction

`PhysBoneTriggerAction`は、プレイヤーがマスコットの`PhysBone`が設定された部位を掴むことで、マスコットがアクションを実行する機能を提供します。

## 概要

このコンポーネントは、アタッチされた`VRCPhysBone`コンポーネントへのインタラクションを監視します。プレイヤーがPhysBoneを一定時間以上掴み続けると、登録された複数のアクションの中からランダムに一つが選択され、再生されます。再生されるアクションは、マスコットの現在の`DefaultState`に応じてフィルタリングすることが可能です。

## パラメータ

インスペクターでは、以下のパラメータを持つアクションをリストで管理します。

| パラメータ | 型 | 説明 |
| :--- | :--- | :--- |
| **Trigger Grabbing Time** | `float` | アクションを発動するために必要な掴み時間（秒）。 |
| **Action Name** | `string` | このコンポーネントで登録されるアクションのベース名。 |
| **Animation Clips** | `AnimationClip` | 掴まれた際に再生されるアニメーション。 |
| **LipSync Animation Clips** | `AnimationClip` | 掴まれた際に再生される口パクアニメーション。 |
| **Facial Animation Clips** | `AnimationClip` | 掴まれた際に再生される表情アニメーション。 |
| **Animation Sounds** | `AudioClip` | 掴まれた際に再生される音声。 |
| **Speech Bubble Texts** | `string` | 掴まれた際に表示される吹き出しメッセージ。 |
| **Speech Bubble Durations** | `float` | 上記メッセージの表示時間。 |
| **Look At Enables** | `bool` | アクション再生中に、掴んだプレイヤーの方向を向くかどうか。 |
| **Allowed Default States** | `string` | このアクションが再生可能となる`DefaultState`の名前。空の場合はどのステートでも再生可能です。 |

---

# RandomTriggerAction

`RandomTriggerAction`は、マスコットが待機状態のときに、ランダムな間隔で自動的にアクションを実行する機能を提供します。

## 概要

このコンポーネントは、指定された時間範囲内でランダムな待機時間ごとに、登録されたアクションの中から一つをランダムに選択して再生します。これにより、マスコットに自発的な振る舞いをさせることができます。再生されるアクションは、マスコットの現在の`DefaultState`に応じてフィルタリングすることが可能です。

## パラメータ

インスペクターでは、以下のパラメータを持つアクションをリストで管理します。

| パラメータ | 型 | 説明 |
| :--- | :--- | :--- |
| **Min Trigger Time** | `float` | アクションがトリガーされるまでの最小待機時間（秒）。 |
| **Max Trigger Time** | `float` | アクションがトリガーされるまでの最大待機時間（秒）。 |
| **Contact Action Name** | `string` | このコンポーネントで登録されるアクションのベース名。 |
| **Contact Animations** | `AnimationClip` | ランダムに再生されるアニメーション。 |
| **Contact Lip Sync Animations** | `AnimationClip` | ランダムに再生される口パクアニメーション。 |
| **Contact Facial Animations** | `AnimationClip` | ランダムに再生される表情アニメーション。 |
| **Contact Sound** | `AudioClip` | ランダムに再生される音声。 |
| **Contact Message** | `string` | ランダムに表示される吹き出しメッセージ。 |
| **Contact Message Duration** | `float` | 上記メッセージの表示時間。 |
| **Allowed Default States** | `string` | このアクションが再生可能となる`DefaultState`の名前。空の場合はどのステートでも再生可能です。 |
