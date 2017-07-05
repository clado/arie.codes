angular.module('SurpriseApp')
  .factory('Routes', function(){

    var links = [
      {
        // split into match url and destination url when switching to Angular Router
        url: 'index.html',
        text: 'about',
        shadeClass: 'red'
      },
      {
        url: 'resume.html',
        text: 'resume',
        shadeClass: 'orange'
      },
      {
        url: 'mailto:&subject=BREAKING%20NEWS:%20I%20like%20mailto%20tags' +
              '&body=I%20make%20mailto%20tags%20work%20for%20me%20using:',
        icon: 'fa-envelope-o',
        text: 'arievanantwerp // gmail',
        textClass: 'email',
        shadeClass: 'green'
      },
      {
        url: 'http://github.com/clado',
        icon: 'fa-github-square',
        shadeClass: 'blue'
      },
      {
        url: 'http://linkedin.com/in/ariedva',
        icon: 'fa-linkedin-square',
        shadeClass: 'purple'
      }
    ]

    return {'links': links}

  })
