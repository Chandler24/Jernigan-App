using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;

namespace CaerusSoft.Jernigan.Shared
{
    public static class SafeDisposeHelper
    {
        public static void SafeDispose(object disposable)
        {
            ICommunicationObject communicationObject = disposable as ICommunicationObject;
            if(communicationObject != null)
            {
                if(communicationObject.State == CommunicationState.Faulted)
                {
                    communicationObject.Abort();
                }
                else
                {
                    communicationObject.Close();
                }
            }

            IDisposable d = disposable as IDisposable;
            if(d != null)
            {
                d.Dispose();
            }
        }
    }
}
