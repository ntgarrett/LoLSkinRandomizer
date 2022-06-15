export const baseUrl = 'http://ddragon.leagueoflegends.com';
export const versionUrl = `${baseUrl}/api/versions.json`;
const patchNum = localStorage.getItem('currentPatch') 

export function buildAllChampionsUrl() {
  return `${baseUrl}/cdn/${patchNum}/data/en_US/champion.json`;
}

export function buildChampionUrl(champion) {
  return `${baseUrl}/cdn/${patchNum}/${champion}.json`;
}

export function buildSkinLoadingImageUrl(champion, num) {
  return `${baseUrl}/cdn/img/champion/loading/${champion}_${num}.jpg`;
}
