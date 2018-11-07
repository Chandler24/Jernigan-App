using CaerusSoft.Jernigan.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JerniganService.Models
{
    public class TimelineModel
    {
        public List<Info> Info { get; set; }
        public string Image { get; set; }
    }

    public class Info
    {
        public string Year { get; set; }
        public string Description { get; set; }
    }
}