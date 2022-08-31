export const baseUrl = 'https://ddragon.leagueoflegends.com';
export const versionUrl = `${baseUrl}/api/versions.json`;
const patchNum = localStorage.getItem('currentPatch') 

export function buildAllChampionsUrl() {
  return `${baseUrl}/cdn/${patchNum}/data/en_US/champion.json`;
}

export function buildChampionUrl(champion) {
  return `${baseUrl}/cdn/${patchNum}/data/en_US/champion/${champion}.json`;
}

export function buildSkinLoadingImageUrl(champion, num) {
  return `${baseUrl}/cdn/img/champion/loading/${champion}_${num}.jpg`;
}

export function buildSkinSquareImageUrl(champion) {
  return `${baseUrl}/cdn/${patchNum}/img/champion/${champion}.png`;
}