## usersテーブル

|colum|Type|Options|
|user_id|integer|null: false, foreign_key: true|
|email|integer|null: false|
|password|integer|null: false|


## messageテーブル

|colum|Type|Options|group|
|user|references|null: false, foreign_key: true|
|name|integer|null: false|
|body|integer|null: false|
|image|string|null: false|

### Association
- belongs_to :user
　belongs_to :group

## groupテーブル
|Column|Type|Options|
|user|


## groups_usersテーブル

|Column|Type|Options|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

