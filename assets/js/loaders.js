function getAllPages(name, urlPrefix, callback, page, results) {
  page = page || 1;
  results = results || [];

  var url = urlPrefix + '?per_page=100&page=' + parseInt(page);

  $.get(url, function(data) {
    if (data.length > 0) {
      data.forEach(function(resultDatum) {
        results.push(resultDatum);
      });
      getAllPages(name, urlPrefix, callback, page + 1, results);
    }
    else {
      callback(results, name);
    }
  });
}

function getGithubRepos(name, callback, page, repos) {
  getAllPages(name, `https://api.github.com/users/${name}/repos`, callback);
}

function getGithubMembers(name, callback) {
  getAllPages(name, `https://api.github.com/orgs/${name}/members`, callback);
}

function loadRepositoryData(repoData, name) {
  var org = new Organization(name);
  org.repos = [];

  repoData.forEach(function(repoDatum) {
    org.repos.push(new Repository(repoDatum));
  });

  $(`.projects .featured .${name}`).empty();

  $(`.projects .${name}-img`).attr('href', `https://github.com/${name}`);
  
  $(`.projects .${name}-title`).html(name);
  $(`.projects .${name}-title`).attr('href', `https://github.com/${name}`);
  org.addReposToContainer($(`.projects .${name}`), org.featuredRepos());
  $(`.projects .${name}-link`).html(`<a target="_blank" href="https://github.com/${name}" class="btn btn-primary">MORE ON GITHUB</a>`)
}

function loadMemberData(members, name) {
  $(`.projects .${name}-dev-count`).html(members.length);
}

$(document).ready(function() {
  getGithubRepos('provectus', loadRepositoryData);
  //getGithubMembers('provectus', loadMemberData);

  getGithubRepos('opendatadiscovery', loadRepositoryData);
  // getGithubMembers('opendatadiscovery', loadMemberData);

  getGithubRepos('Hydrospheredata', loadRepositoryData);
  //getGithubMembers('Hydrospheredata', loadMemberData);
});
