var express = require('express')
var router = express.Router()
var courses = require('../services/courses')

// Get all courses 

router.use(function (req, res, next) {
  courses.getCourses().then(function (courseCollection) {
    req.courses = courseCollection.items
    next()
  })
})

// Get slugs and route individual courses into pages

router.param('slug', function (req, res, next, slug) {
  courses.getCourse(slug).then(function (course) {
    req.course = course.items[0]
    next()
  })
})

// the colon indicates a reference to the above parameter

router.get('/courses/:slug', function (req, res, next) {
  res.render('course', {
    title: req.course.fields.title, 
    course: req.course
  })
})


// Render the home page

router.get('/', function (req, res, next) {
  res.render('index', {
    'title': 'Courses',
    'courses': req.courses
  })
})

router.get('/courses', function (req, res, next) {
  res.render('index', {
    'title': 'Courses',
    'courses': req.courses
  })
})

module.exports = router
