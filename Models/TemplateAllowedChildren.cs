namespace Agora.Models
{
    public class TemplateAllowedChildren
    {
        public Guid IdTemplate { get; set; } = Guid.NewGuid();
        public Guid IdTemplateParent { get; set; } = Guid.NewGuid();
        public int MaxAllowed { get; set; } = 0;

    }
}