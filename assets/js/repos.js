Repository = function(repo) {
  this.name        = repo.name;
  this.language    = repo.language;
  this.url         = repo.html_url;
  this.description = repo.description;
  this.fork        = repo.fork;
  this.watchers    = repo.watchers;
  this.forks       = repo.forks;
}

Repository.prototype.blogPost = function() {
  if (oss_projects[this.name] && oss_projects[this.name].blog_post) {
    return oss_projects[this.name].blog_post;
  }
}

Repository.prototype.featured = function() {
  return oss_projects[this.name] && oss_projects[this.name].featured;
}

Repository.prototype.deprecated = function() {
  return oss_projects[this.name] && oss_projects[this.name].deprecated;
}

Repository.prototype.position = function() {
  if (oss_projects[this.name] && oss_projects[this.name].position) {
    return oss_projects[this.name].position;
  }
}

Repository.prototype.logo = function() {
  if (oss_projects[this.name] && oss_projects[this.name].logo) {
    return oss_projects[this.name].logo;
  }
}

Repository.prototype.background = function() {
  if (oss_projects[this.name] && oss_projects[this.name].background) {
    return oss_projects[this.name].background;
  }
}

Repository.prototype.classes = function() {
  if (this.featured()) {
    return 'featured-project';
  } else if (this.deprecated()) {
    return 'deprecated-project';
  }
}

Repository.prototype.getBlogLink = function() {
  if (this.blogPost()) {
    return '<a href="'+ this.blogPost() +'" target="_blank"><span class="octicon octicon-file-text"></span> Blog post</a> ';
  }
}

Repository.prototype.getContainer = function(index) {
  var last = '';
  if (index % 5 == 0) { last = 'last-in-row' }

  return [
    '<div class="clearfix gutter-spacious item-block ', this.language, ' ', this.classes(), ' ', last, '">',
      '<div>',
        this.featuredImage(),
        this.repoContent(),
        this.bottomLinks(),
      '</div>',
    '</div>'
  ].join('');
}

Repository.prototype.featuredImage = function() {
  return [
    '<h2 class="alt-h3 mb-2">',
      '<img class="octicon octicon-terminal fill-blue d-inline mr-2" width=28 src="/assets/img/', (this.background() ? this.background() : 'github.png') ,'">',
      '<a class="text-bold" href="', this.url, '" target="_blank">', this.headerLogo(), this.name, '</a>',
    '</h2>'
  ].join('');
}

Repository.prototype.headerLogo = function() {
  if (this.logo()) {
    return '<img width=50 src="/img/' + this.logo() + '" height="21px" width="26px" class="logo"> ';
  }
}

Repository.prototype.repoContent = function() {
  return [
    '<div class="clearfix box-content col-md-6">',
      '<p class="text-gray">', this.description, '</p>',
      '<div class="repo-info">',
        '<span><b><i class="octicon octicon-star"></i> ', this.watchers, '</b></span> | ',
        '<span><b><i class="octicon octicon-repo-forked"></i> ', this.forks, '</b></span> | ',
        '<span class="language ', this.language ,'">', this.language, '</b></span>',
      '</div>',
    '</div>'
  ].join('');
}

Repository.prototype.bottomLinks = function() {
  if (this.blogPost()) {
    return [
      '<div class="bottom-links">',
        this.getBlogLink(),
      '</div>'
    ].join('');
  }
}
