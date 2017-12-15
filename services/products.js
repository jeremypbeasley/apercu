var client = require('./contentfulClient').client

function getProduct (slug, query) {
  // little trick to get an entry with include
  // this way all linked items will be resolved for us
  query = query || {}
  query['content_type'] = 'course'
  query['fields.slug'] = slug
  return client.getEntries(query)
}

function getProducts (query) {
  query = query || {}
  query.content_type = 'course'
  return client.getEntries(query)
}

module.exports = {
  getProduct,
  getProducts
}
