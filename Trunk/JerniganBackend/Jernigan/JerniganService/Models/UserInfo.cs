using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JerniganService.Models
{
    public class UserInfo
    {
        public byte [] ProfilePhoto { get; set; }

        public string Username { get; set; }
        
        public string Location { get; set; }

        public string Bio { get; set; }

        public LocationInfo [] VisitedLocations { get; set; }
    }
}