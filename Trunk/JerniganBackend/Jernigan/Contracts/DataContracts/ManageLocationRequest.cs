using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace CaerusSoft.Jernigan.Contracts
{
    [DataContract]
    public class ManageLocationRequest
    {
        [DataMember]
        public Guid UserId { get; set; }

        [DataMember]
        public string LocationId { get; set; }

        [DataMember]
        public string Comments { get; set; }

        [DataMember]
        public RatingEnum Rating { get; set; }
    }
}
