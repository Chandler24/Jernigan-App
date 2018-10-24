using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace CaerusSoft.Jernigan.Contracts
{
    [DataContract]
    public class TimelineCheckResponse
    {
        [DataMember]
        public Guid LocationId { get; set; }

        [DataMember]
        public string LocationName { get; set; }

        [DataMember]
        public string LocationAddress { get; set; }

        [DataMember]
        public bool TimelineAvailable { get; set; }

        [DataMember]
        public string Longitude { get; set; }

        [DataMember] 
        public string Latitude { get; set; }
    }
}
