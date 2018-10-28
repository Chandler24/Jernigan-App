using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CaerusSoft.Jernigan.Contracts;

namespace JerniganService.Models
{
    public class LocationInfo
    {
        public string LocationName { get; set; }

        public Guid LocationId { get; set; }

        public RatingEnum Rating { get; set; }

        public Comment [] Comments { get; set; }
    }

    public class Comment
    {
        public string Message { get; set; }

        public Guid UserId { get; set; }

        public DateTime DatePosted { get; set; }
    }
}