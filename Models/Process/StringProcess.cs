namespace NetAPIWithReactJS.Models.Process
{
    public class StringProcess
    {
        public string ProcessWhiteSpace(string strInput)
        {
            do
            {
                if(strInput.IndexOf("  ") > -1){
                    strInput = strInput.Replace("  "," ");
                }
            } while(strInput.IndexOf("  ") > -1);
            return strInput;
        }
    }
}