using CaerusSoft.Jernigan.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CaerusSoft.Jernigan.Proxies
{
    public class JerniganResourceAccess_EmulatorProxy : DisposableClientBase<IJerniganResourceAccess_Emulator>, IJerniganResourceAccess_Emulator
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
