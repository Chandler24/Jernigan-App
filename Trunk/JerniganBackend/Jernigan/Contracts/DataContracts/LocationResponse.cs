using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace CaerusSoft.Jernigan.Contracts
{
    [DataContract]
    public class LocationResponse
    {
        [DataMember]
        public decimal Longitude { get; set; }

        [DataMember]
        public decimal Latitude { get; set; }

        [DataMember]
        public string LocationName { get; set; }
    }
}
