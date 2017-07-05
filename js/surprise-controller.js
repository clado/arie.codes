var app = angular.module('SurpriseApp', [])
  .controller('SurpriseController', function($timeout){

    // first, second, and third strings in the paragraph
    // aren't changed on timeout
    this.first = 'node.js'
    this.second = 'angularJS'
    this.third = 'OCaml'

    this.possibility = 'git add --patch'

    this.possibilities = [
      'contemplating the meaning of my existence',
      'crochet',
      'functional programming',
      'giant african millipedes',
      'git add --patch',
      'Haskell',
      'jigsaw puzzles',
      'Rails',
      'sleeping',
      'studenthood',
      'tail recursion',
      'they/them pronouns',
      'working at my dream job'
    ]

    this.init = function(){
      $timeout(pickPossibility, pickTime())
    }

    var pickTime = function() {
      var max = 7000
      var min = 3000
      return Math.random() * (max - min) + min
    }

    var pickPossibility = function(){
      var newIndex = Math.floor(Math.random() * this.possibilities.length)
      this.possibility = this.possibilities[newIndex]
      this.init()
    }.bind(this)

    this.init()

  })
