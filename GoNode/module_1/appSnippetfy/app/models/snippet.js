const hljs = require("highlight.js");

const md = require("markdown-it")({
    hightlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            return `<pre class="hljs"><code>${
                hljs.highlight(lang, str.trim(), true).value
            }</code></pre>`;
        }
        return `<pre class="hljs"><code>${md.utils.escapeHtml(
            str.trim()
        )}</code></pre>`;
    }
});

module.exports = (sequelize, dataTypes) => {
    const Snippet = sequelize.define(
        "Snippet",
        {
            title: dataTypes.STRING,
            description: dataTypes.TEXT
        },
        {
            getterMethods: {
                excerpt() {
                    return this.description.length > 120
                        ? `${this.description.substring(
                              0,
                              this.description.lastIndexOf(" ", 120)
                          )} ...`
                        : this.description;
                }
            },
            formattedContent() {
                return md.render(this.description);
            }
        }
    );

    Snippet.associate = models => {
        Snippet.belongsTo(models.Category);
    };

    return Snippet;
};
