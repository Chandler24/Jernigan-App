using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Contracts;

namespace CaerusSoft.Jernigan.Proxies
{
    public class JerniganResourceAccess_RealImplProxy : DisposableClientBase<IJerniganResourceAccess_RealImpl>, IJerniganResourceAccess_RealImpl
    {
        public void AddFavoriteLocation(ManageLocationRequest request)
        {
            base.Channel.AddFavoriteLocation(request);
        }

        public void DeleteFavoriteLocation(ManageLocationRequest request)
        {
            base.Channel.DeleteFavoriteLocation(request);
        }

        public void LeaveFeedback(ManageLocationRequest request)
        {
            base.Channel.LeaveFeedback(request);
        }
    }
}
