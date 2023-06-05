export class Post {
  constructor(data) {
    this.id = data.id
    this.creatorId = data.creatorId
    this.imgUrl = data.imgUrl
    this.likeIds = data.likeIds
    this.body = data.body
    this.creator = data.creator || {}
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
  }
}