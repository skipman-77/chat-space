## usersテーブル

|colum|Type|Options|
|user_id|integer|null: false, foreign_key: true|
|email|integer|null: false, foreign_key: true|
|password|integer|null: false, foreign_key: true|
|username|integer|null: false, foreign_key: true|

## messageテーブル

|colum|Type|Options|
|user_id|integer|null: false, foreign_key: true|
|username|integer|null: false, foreign_key: true|
|内容|integer|null: false, foreign_key: true|
|when|integer|null: false, foreign_key: true|
|誰の投稿に対して|integer|null: false, foreign_key: true|


### Association
- belongs_to :user