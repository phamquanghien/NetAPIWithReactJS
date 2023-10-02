using System.Runtime.CompilerServices;

using System.ComponentModel.DataAnnotations;

namespace NetAPIWithReactJS.Models
{
    public class Person
    {
        [Key]
        [Required]
        [MinLength(3)]
        public string PersonID { get; set;}
        [Required]
        [MinLength(6)]
        public string FullName { get; set; }
    }
}