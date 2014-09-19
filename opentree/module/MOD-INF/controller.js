var html = "text/html";
var encoding = "UTF-8";
var ClientSideResourceManager = Packages.com.google.refine.ClientSideResourceManager;

/*
 * Function invoked to initialize the extension.
 */
function init() {
    var RS = Packages.com.google.refine.RefineServlet;
    /* WIRING */
    RS.registerCommand(module, "subtree", new Packages.org.opentree.refine.SubTree());
    
    // Script files to inject into /project page
    ClientSideResourceManager.addPaths(
        "project/scripts",
        module,
        [
            "scripts/project-injection.js"
            , "scripts/js/d3.min.js"
            , "scripts/js/d3.layout.min.js"
            , "scripts/js/d3.phylogram.js"
            , "scripts/js/newick.js"
        ]
    );
    
    // Style files to inject into /project page
    ClientSideResourceManager.addPaths(
        "project/styles",
        module,
        [
            "styles/project-injection.less"
        ]
    );
}

/*
 * Function invoked to handle each request in a custom way.
 */
function process(path, request, response) {
    if (path == "/" || path == "") {
        var context = {};
        
        return "Hello World!";
        //send(request, response, "index.vt", context);
    }
}

function send(request, response, template, context) {
    butterfly.sendTextFromTemplate(request, response, context, template, encoding, html);
}