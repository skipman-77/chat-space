## usersテーブル

|colum|Type|Options|
|user_id|integer|null: false, foreign_key: true|
|email|integer|null: false, foreign_key: true|
|password|integer|null: false, foreign_key: true|
|

## messageテーブル

|colum|Type|Options|group|
|user|references|null: false, foreign_key: true|
|name|integer|null: false, foreign_key: true|
|body|integer|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|

### Association
- belongs_to :user
　belongs_to :group