const accessToken = 'AQXlGSyyw0vQXEJpK7gUPlAKVY7z7Sf-x3vmF5s8SimdRxfbVWh4Dx765c_IU8dfzbRx7tS8ALHN_JwhpElDZKSHQgEQ-up-Vhdg6PB8gzB--IQ5kjIgjq9Ywdnm2uxKWTlFFsKRbYjhgExZ6_clfonEWa10F6tV64-_ccaxZLqgnVfdUbr7p3LNc7TBbNKBxqnTI3Ugndk1OgMmRlTh6_hHUFB0htQ1KGRz4f3kR-1Y4w8wuT-8JpqZMWg1wRMZzTSEd5AVBhRoIEt4HD_hvSktWkuSacWLbmxxDVXFDCu7GjkjdXM3R3d5_s5TOZDsndBt4oEeJwMF6JMK6op37bTYqZtXBA';

fetch('https://api.linkedin.com/v2/me', {
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'cache-control': 'no-cache',
    'X-Restli-Protocol-Version': '2.0.0'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(`Error: ${error}`));
