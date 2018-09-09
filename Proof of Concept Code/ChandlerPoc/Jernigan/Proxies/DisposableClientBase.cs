using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;

namespace CaerusSoft.Jernigan.Proxies
{
    public abstract class DisposableClientBase<TChannel> : ClientBase<TChannel>, IDisposable where TChannel : class
    {
        private bool Disposed;

        void IDisposable.Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!Disposed)
            {
                if (disposing)
                {
                    if (this.State == CommunicationState.Faulted)
                    {
                        this.Abort();
                    }
                    else
                    {
                        this.Close();
                    }
                }

                Disposed = true;
            }
        }

        ~DisposableClientBase()
        {
            Dispose(false);
        }
    }
}
