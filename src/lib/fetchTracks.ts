import { SavedTrack } from 'spotify-types';

const apiToken: string =
  'BQAOPhs2bk7VrkAKiZUCOkQP93-hrhP-naMLtav3EbiTmqdcw75yNWDcEpqc-8muuiuFxDlmvNBrE5D25WAn0p_cy1LeXH2fcT7480LYFytx9HTn2Ifmo1LE-OL9caZWNaTLi9BZh-XiCu54FRsUVNX5KFIez2n5i14cJKWrvnu3FkaJ_Ct4CCskAutpva3b0xQFwPmpGWatkN23gBUVzFBMH0lRc6XXUZZAknTJdqbi8oIohjvQan-_v_41Uxz1JfRixbC6Gcu3114RpygXh-oQFLbp_O1j5NNFKBoXbUMsBG0xckJQULXgq5kv0RkHCRuX-40TLxN31E1Lx27K1SYbWpo';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};
