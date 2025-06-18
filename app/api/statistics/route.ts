import { NextResponse } from 'next/server';

// 缓存时间设置为15分钟
const CACHE_DURATION = 15 * 60 * 1000;
let cache = {
  data: null,
  timestamp: 0
};

export async function GET() {
  const now = Date.now();
  
  // 如果缓存存在且未过期，直接返回缓存数据
  if (cache.data && (now - cache.timestamp < CACHE_DURATION)) {
    console.log('使用缓存数据，缓存时间：', new Date(cache.timestamp).toLocaleString());
    return NextResponse.json(cache.data);
  }

  console.log('缓存未命中，重新获取数据...');
  try {
    // 并行请求所有数据
    const [statisticsRes, cellRes, addressRes] = await Promise.all([
      fetch("https://mainnet-api.explorer.nervos.org/api/v1/statistics", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      }),
      fetch("https://mainnet-api.explorer.nervos.org/api/v1/daily_statistics/live_cells_count-dead_cells_count", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      }),
      fetch("https://mainnet-api.explorer.nervos.org/api/v1/daily_statistics/addresses_count", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      })
    ]);

    const [statisticsData, cellData, addressData] = await Promise.all([
      statisticsRes.json(),
      cellRes.json(),
      addressRes.json()
    ]);

    const processedData = {
      hashRate: (statisticsData.data.attributes.hash_rate / 1000000000000).toFixed(2),
      translations: statisticsData.data.attributes.transactions_last_24hrs,
      liveCell: (cellData.data[cellData.data.length - 1].attributes.live_cells_count / 1000000).toFixed(2),
      addressCount: (addressData.data[addressData.data.length - 1].attributes.addresses_count / 1000000).toFixed(2)
    };

    // 更新缓存
    cache = {
      data: processedData,
      timestamp: now
    };

    console.log('数据已更新，新缓存时间：', new Date(now).toLocaleString());
    return NextResponse.json(processedData);
  } catch (error) {
    console.error('Error fetching statistics:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
} 