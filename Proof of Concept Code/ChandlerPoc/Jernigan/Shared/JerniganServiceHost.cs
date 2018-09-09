using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;

namespace CaerusSoft.Jernigan.Shared
{
    public class JerniganServiceHost : ServiceHost
    {
        public JerniganServiceHost(Type serviceType, params Uri [] baseAddresses) : base(serviceType, baseAddresses)
        { }

        protected override void OnOpening()
        {
            base.OnOpening();
        }
    }
}
