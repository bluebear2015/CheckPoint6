export class Post {
  constructor(data) {
    this.id = data.id
    this.creatorId = data.creatorId
    this.imgUrl = data.imgUrl
    this.likeIds = data.likeIds
    this.body = data.body
    this.creator = data.creator || {}
    this.createdAt = new Date(data.createdAt).toLocaleString(undefined, {
      timeStyle: 'short',
      dateStyle: 'medium',
    });
    this.updatedAt = new Date().toLocaleString(undefined, {
      timeStyle: 'short',
      dateStyle: 'medium',
    });
  }
}