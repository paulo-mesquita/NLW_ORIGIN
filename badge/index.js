const LinksSocialMedia = {
  github: 'paulo-mesquita',
  youtube: 'c/PauloMesquita_code',
  facebook: 'paulonewbs',
  instagram: 'paulonewbs',
  linkedin: 'in/paulo-jc-mesquita'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    //alert(li.children[0].href)
  }
  //Alternativa para mudar href da tag <a> de github
  document.getElementById('userGithub').href =
    'https://github.com/paulo-mesquita'
}

changeSocialMediaLinks()
