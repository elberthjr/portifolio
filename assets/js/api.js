
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/elberthjr/portifolio/main/Portifólio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}