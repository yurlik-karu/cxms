using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace cxms.Controllers
{
    [Route("api/[controller]/[action]")]
    public class PublicController : Controller
    {
        [HttpGet]
        [ActionName("GetSellOrders")]
        public async Task<IActionResult> GetSellOrders()
        {
            using (var client = new System.Net.WebClient())
            {
                var datasell = await client.DownloadDataTaskAsync(new Uri("https://c-cex.com/t/api_pub.html?a=getorderbook&market=btc-usd&type=sell&depth=100"));
                return Ok(System.Text.Encoding.ASCII.GetString(datasell));
            }
        }

        [HttpGet]
        [ActionName("GetBuyOrders")]
        public async Task<IActionResult> GetBuyOrders()
        {
            using (var client = new System.Net.WebClient())
            {
                var databuy = await client.DownloadDataTaskAsync(new Uri("https://c-cex.com/t/api_pub.html?a=getorderbook&market=btc-usd&type=buy&depth=100"));
                return Ok(System.Text.Encoding.ASCII.GetString(databuy));
            }
        }
    }
    /*
        public class OrderInfo
        {
            public double Quantity { get; set; }

            public double Rate { get; set; }
        }
        public class OrderInfoResult
        {
            public OrderInfo[] Buy { get; set; }
            public OrderInfo[] Sell { get; set; }
        }

        public class OrderInfoSet
        {
            public bool Success { get; set; }
            public string Message { get; set; }
            public OrderInfoResult Result { get; set; }
        }*/
}

