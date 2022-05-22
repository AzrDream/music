// 这个js文件就是专门用于管理请求各种接口地址的
import Network from '@/api/network'

export const getBanner = () => Network.get('banner?type=2')
export const getPersonalized = () => Network.get('personalized?limit=6')
export const getNewAlbum = () => Network.get('album/newest')
