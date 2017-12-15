var client = require('./contentfulClient').client

function getCourse (slug, query) {
  // little trick to get an entry with include this way all linked items will be resolved for us
  query = query || {}
  query['content_type'] = 'course'
  query['fields.slug'] = slug
  return client.getEntries(query)
}

function getCourses (query) {
  query = query || {}
  query.content_type = 'course'
  return client.getEntries(query)
}

module.exports = {
  getCourse,
  getCourses
}
