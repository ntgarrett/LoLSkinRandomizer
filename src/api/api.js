const baseUrl = 'https://ddragon.leagueoflegends.com'
export const versionUrl = `${baseUrl}/api/versions.json`

export const patchFetch = async () => {
  return await fetch(versionUrl)
    .then(res => res.json())
    .then(versions => versions[0])
    .catch(err => console.log(err.message))
}
