
async function fetchProfileData() {
    const url = 'https://github.com/elberthjr/portifolio/blob/main/Portifólio/data/profile.json'
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}