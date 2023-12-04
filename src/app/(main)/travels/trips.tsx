import type { Position } from "geojson";

export const trips = [
  {
    id: "0",
    title: "Zargeb, Rome, Cagliari",
    legs: [
      {
        from: {
          code: "NRN",
          coordinates: [] as number[],
        },
        to: {
          code: "ZAG",
          coordinates: [] as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "ZAG",
          coordinates: [] as number[],
        },
        to: {
          code: "FCO",
          coordinates: [] as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "CIA",
          coordinates: [] as number[],
        },
        to: {
          code: "CAG",
          coordinates: [] as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "CAG",
          coordinates: [] as number[],
        },
        to: {
          code: "NRN",
          coordinates: [] as number[],
        },
        type: "plane",
      },
    ],
    duration: 7,
    date: "2022/03",
    story: "",
    facts: "",
    prices: {
      flights: 0,
      total: 0,
    },
  },
  {
    id: "1",
    title:
      "Zadar, Pichl, Zermatt, Zürich, Zagreb, Budapest, Bratislava, Vienna, Zator, Krakow, Prague",
    legs: [
      {
        from: {
          code: "Rhenen",
          coordinates: [] as number[],
        },
        to: {
          code: "Zadar",
          coordinates: [] as number[],
        },
        route: {
          coordinates: [
            [5.572538, 51.963164],
            [5.57235, 51.9828],
            [5.614452, 51.999709],
            [5.61327, 52.01393],
            [5.638136, 52.016319],
            [5.674608, 52.012428],
            [5.716007, 52.020485],
            [5.804342, 52.022935],
            [5.856204, 52.028501],
            [5.93207, 52.014374],
            [5.945977, 52.007387],
            [5.956252, 51.991285],
            [5.99982, 51.96754],
            [6.082627, 51.942147],
            [6.152412, 51.908356],
            [6.179602, 51.884927],
            [6.206977, 51.869441],
            [6.268775, 51.861221],
            [6.306899, 51.846348],
            [6.33388, 51.844051],
            [6.380062, 51.828192],
            [6.437924, 51.818011],
            [6.482482, 51.803393],
            [6.506085, 51.781916],
            [6.531463, 51.773343],
            [6.559954, 51.756951],
            [6.592782, 51.747662],
            [6.609424, 51.738552],
            [6.623191, 51.712349],
            [6.660272, 51.700793],
            [6.704902, 51.679925],
            [6.734044, 51.653324],
            [6.751872, 51.629116],
            [6.780351, 51.605472],
            [6.783197, 51.590591],
            [6.814394, 51.552311],
            [6.830228, 51.53964],
            [6.814531, 51.523148],
            [6.822301, 51.502764],
            [6.814077, 51.486251],
            [6.812584, 51.461982],
            [6.799637, 51.454051],
            [6.80831, 51.435281],
            [6.796839, 51.418825],
            [6.81826, 51.391079],
            [6.832405, 51.360056],
            [6.865058, 51.345352],
            [6.893839, 51.323085],
            [6.896291, 51.297535],
            [6.914962, 51.261303],
            [6.914129, 51.228325],
            [6.934672, 51.20283],
            [6.965912, 51.152952],
            [6.9877, 51.109438],
            [6.9895, 51.059537],
            [7.008079, 51.039583],
            [7.014158, 51.011648],
            [7.014308, 50.985985],
            [7.028954, 50.972354],
            [7.038722, 50.946858],
            [7.061826, 50.921554],
            [7.070103, 50.905592],
            [7.086528, 50.896559],
            [7.094103, 50.883423],
            [7.098582, 50.825634],
            [7.138269, 50.804381],
            [7.149056, 50.790549],
            [7.171292, 50.796215],
            [7.237057, 50.775618],
            [7.229146, 50.763173],
            [7.236804, 50.745128],
            [7.241098, 50.716775],
            [7.279601, 50.681193],
            [7.319874, 50.661985],
            [7.347708, 50.63999],
            [7.374508, 50.633531],
            [7.391834, 50.623577],
            [7.421388, 50.615011],
            [7.432019, 50.600861],
            [7.470182, 50.581506],
            [7.482176, 50.580577],
            [7.539696, 50.559986],
            [7.569616, 50.556747],
            [7.605456, 50.529781],
            [7.620875, 50.524131],
            [7.682219, 50.523736],
            [7.730658, 50.501936],
            [7.751065, 50.484919],
            [7.780002, 50.450196],
            [7.809993, 50.445118],
            [7.850951, 50.447161],
            [7.862643, 50.453853],
            [7.90009, 50.451564],
            [7.913818, 50.443993],
            [7.938578, 50.412533],
            [7.985741, 50.412381],
            [8.010188, 50.404828],
            [8.06212, 50.40246],
            [8.0738, 50.397785],
            [8.090239, 50.378493],
            [8.159153, 50.354121],
            [8.175804, 50.342631],
            [8.213342, 50.327063],
            [8.232119, 50.30779],
            [8.251128, 50.263478],
            [8.24561, 50.23819],
            [8.25611, 50.197878],
            [8.26843, 50.1813],
            [8.289265, 50.17135],
            [8.31303, 50.150476],
            [8.329868, 50.141501],
            [8.342648, 50.11372],
            [8.364751, 50.078086],
            [8.397278, 50.047278],
            [8.480248, 50.025921],
            [8.495666, 50.027294],
            [8.543973, 50.046592],
            [8.573994, 50.053083],
            [8.618706, 50.052157],
            [8.661611, 50.060938],
            [8.70006, 50.061374],
            [8.772353, 50.067133],
            [8.815974, 50.067832],
            [8.851289, 50.061458],
            [8.888119, 50.058714],
            [8.917021, 50.052679],
            [8.931956, 50.0432],
            [8.951865, 50.020389],
            [9.015463, 49.992725],
            [9.040364, 49.987479],
            [9.13395, 49.995401],
            [9.166674, 49.990975],
            [9.218507, 50.002851],
            [9.249647, 49.995419],
            [9.269779, 49.979151],
            [9.319248, 49.959587],
            [9.344835, 49.938982],
            [9.355506, 49.921531],
            [9.376368, 49.904478],
            [9.460643, 49.866919],
            [9.497141, 49.853649],
            [9.512391, 49.838472],
            [9.546361, 49.821125],
            [9.580178, 49.808957],
            [9.583985, 49.794028],
            [9.571889, 49.778662],
            [9.583053, 49.769878],
            [9.610162, 49.763941],
            [9.643148, 49.762378],
            [9.692405, 49.768712],
            [9.7247, 49.775889],
            [9.770832, 49.769154],
            [9.804452, 49.747557],
            [9.844563, 49.748852],
            [9.877558, 49.746255],
            [9.91521, 49.754878],
            [9.963241, 49.752497],
            [9.973665, 49.739815],
            [10.016968, 49.741898],
            [10.047508, 49.754325],
            [10.080077, 49.774399],
            [10.12101, 49.784883],
            [10.175623, 49.788965],
            [10.201751, 49.783332],
            [10.245871, 49.780046],
            [10.273952, 49.782893],
            [10.318714, 49.774111],
            [10.374633, 49.773966],
            [10.416005, 49.784121],
            [10.435202, 49.784975],
            [10.463903, 49.77209],
            [10.516687, 49.764458],
            [10.574136, 49.758851],
            [10.601394, 49.758539],
            [10.6293, 49.745018],
            [10.680184, 49.730808],
            [10.72768, 49.73147],
            [10.784892, 49.738151],
            [10.812194, 49.73328],
            [10.850765, 49.705899],
            [10.869836, 49.676311],
            [10.893124, 49.659212],
            [10.914299, 49.637321],
            [10.927013, 49.609263],
            [10.926544, 49.586307],
            [10.939852, 49.568715],
            [10.958731, 49.561347],
            [11.00115, 49.557509],
            [11.02667, 49.539507],
            [11.06405, 49.527764],
            [11.087147, 49.515446],
            [11.117297, 49.506624],
            [11.167499, 49.483865],
            [11.19473, 49.465453],
            [11.226434, 49.465249],
            [11.257299, 49.453279],
            [11.266997, 49.444962],
            [11.281351, 49.418282],
            [11.322904, 49.385508],
            [11.370744, 49.377299],
            [11.431388, 49.358818],
            [11.46023, 49.324414],
            [11.484556, 49.314252],
            [11.541834, 49.311556],
            [11.560615, 49.288633],
            [11.597094, 49.276754],
            [11.615706, 49.250893],
            [11.636296, 49.237743],
            [11.655508, 49.206276],
            [11.674536, 49.200152],
            [11.68709, 49.185775],
            [11.711599, 49.179638],
            [11.75696, 49.177132],
            [11.782523, 49.171875],
            [11.823692, 49.169011],
            [11.838478, 49.161699],
            [11.869023, 49.129984],
            [11.886748, 49.091536],
            [11.901925, 49.082033],
            [11.928642, 49.049799],
            [11.930669, 49.040931],
            [11.964978, 49.020291],
            [11.995076, 49.008298],
            [12.01198, 48.993122],
            [12.049461, 49.001295],
            [12.065483, 48.991284],
            [12.089427, 48.99055],
            [12.16217, 48.999699],
            [12.187055, 48.999584],
            [12.23855, 48.99182],
            [12.309444, 48.994438],
            [12.35936, 48.99957],
            [12.384026, 48.999232],
            [12.449417, 48.986659],
            [12.477586, 48.976394],
            [12.537032, 48.96154],
            [12.565283, 48.947226],
            [12.695243, 48.934631],
            [12.776675, 48.905178],
            [12.810092, 48.896775],
            [12.838719, 48.870995],
            [12.882177, 48.850324],
            [12.92842, 48.822385],
            [12.963014, 48.812013],
            [13.066264, 48.757546],
            [13.1229, 48.736836],
            [13.189899, 48.700447],
            [13.200841, 48.689827],
            [13.228528, 48.677365],
            [13.262589, 48.667187],
            [13.294798, 48.638533],
            [13.350567, 48.620083],
            [13.370771, 48.599782],
            [13.365435, 48.577008],
            [13.388701, 48.559823],
            [13.39766, 48.545969],
            [13.399154, 48.526958],
            [13.375658, 48.493085],
            [13.371401, 48.472838],
            [13.375311, 48.440611],
            [13.394993, 48.421177],
            [13.422403, 48.413317],
            [13.427569, 48.403082],
            [13.40605, 48.349409],
            [13.408322, 48.332496],
            [13.426773, 48.311677],
            [13.4577, 48.306167],
            [13.477676, 48.298284],
            [13.493476, 48.272785],
            [13.524308, 48.246446],
            [13.589779, 48.232878],
            [13.628562, 48.212319],
            [13.65505, 48.190807],
            [13.677639, 48.188613],
            [13.714681, 48.175352],
            [13.821929, 48.183286],
            [13.84599, 48.176133],
            [13.883798, 48.177218],
            [13.915886, 48.187318],
            [13.95422, 48.188035],
            [13.988929, 48.178113],
            [13.979886, 48.163119],
            [13.985415, 48.146653],
            [14.002364, 48.134781],
            [14.021692, 48.098154],
            [14.021593, 48.074113],
            [14.047659, 48.055813],
            [14.060078, 48.038491],
            [14.072039, 48.009139],
            [14.091622, 47.986043],
            [14.101317, 47.954255],
            [14.095485, 47.935716],
            [14.102219, 47.900304],
            [14.115488, 47.873984],
            [14.144185, 47.866493],
            [14.167386, 47.847401],
            [14.165734, 47.826515],
            [14.176746, 47.796837],
            [14.175487, 47.774029],
            [14.231133, 47.751671],
            [14.254895, 47.749245],
            [14.285949, 47.738796],
            [14.30283, 47.723105],
            [14.316882, 47.692334],
            [14.334574, 47.66322],
            [14.329157, 47.639318],
            [14.349234, 47.610561],
            [14.346027, 47.589504],
            [14.31484, 47.574285],
            [14.299399, 47.5539],
            [14.309834, 47.535216],
            [14.337237, 47.525026],
            [14.367804, 47.523493],
            [14.388948, 47.515893],
            [14.451057, 47.506605],
            [14.468905, 47.497525],
            [14.493874, 47.495704],
            [14.541509, 47.480685],
            [14.583828, 47.472984],
            [14.610471, 47.473504],
            [14.64799, 47.4661],
            [14.659456, 47.45538],
            [14.685, 47.446401],
            [14.712552, 47.428758],
            [14.736951, 47.428585],
            [14.760617, 47.420004],
            [14.775646, 47.406099],
            [14.801241, 47.397124],
            [14.855911, 47.394576],
            [14.891424, 47.386807],
            [14.915532, 47.386746],
            [14.997676, 47.36437],
            [15.011113, 47.33589],
            [15.029669, 47.323361],
            [15.053271, 47.31448],
            [15.0825, 47.29078],
            [15.099603, 47.272438],
            [15.140221, 47.250833],
            [15.194196, 47.242361],
            [15.218437, 47.229086],
            [15.255054, 47.21642],
            [15.301166, 47.218158],
            [15.321477, 47.203236],
            [15.330779, 47.188272],
            [15.330536, 47.146205],
            [15.355704, 47.135672],
            [15.379402, 47.104079],
            [15.377758, 47.046021],
            [15.388537, 47.033586],
            [15.4105, 47.032562],
            [15.407805, 47.003849],
            [15.418132, 46.984504],
            [15.465334, 46.92998],
            [15.471602, 46.913959],
            [15.472194, 46.889676],
            [15.480289, 46.876684],
            [15.503584, 46.859228],
            [15.54921, 46.832751],
            [15.566182, 46.812842],
            [15.575696, 46.784295],
            [15.606806, 46.746216],
            [15.636424, 46.735219],
            [15.646403, 46.726151],
            [15.638355, 46.70322],
            [15.649994, 46.685398],
            [15.644671, 46.667062],
            [15.665815, 46.599283],
            [15.682873, 46.590783],
            [15.685494, 46.565992],
            [15.70032, 46.533193],
            [15.669273, 46.509779],
            [15.66858, 46.49286],
            [15.655867, 46.482214],
            [15.697611, 46.463047],
            [15.739372, 46.457546],
            [15.7672, 46.448943],
            [15.785873, 46.437867],
            [15.823382, 46.404194],
            [15.85322, 46.394193],
            [15.865928, 46.381291],
            [15.869416, 46.34789],
            [15.879222, 46.326727],
            [15.854362, 46.299527],
            [15.869184, 46.266526],
            [15.847433, 46.244452],
            [15.841675, 46.217163],
            [15.846255, 46.184476],
            [15.853098, 46.177095],
            [15.860264, 46.140633],
            [15.888982, 46.12657],
            [15.893071, 46.110035],
            [15.916573, 46.077743],
            [15.921821, 46.030755],
            [15.867269, 46.002182],
            [15.84764, 45.964766],
            [15.833458, 45.949443],
            [15.820446, 45.903386],
            [15.831732, 45.86608],
            [15.820354, 45.841071],
            [15.82311, 45.818498],
            [15.848318, 45.790005],
            [15.88761, 45.769816],
            [15.897084, 45.761099],
            [15.883998, 45.749504],
            [15.869353, 45.723743],
            [15.831262, 45.695987],
            [15.797997, 45.684819],
            [15.746536, 45.674095],
            [15.707803, 45.660833],
            [15.685779, 45.649427],
            [15.659408, 45.630036],
            [15.634989, 45.601367],
            [15.616117, 45.569107],
            [15.59981, 45.551427],
            [15.553774, 45.517189],
            [15.51341, 45.509804],
            [15.49175, 45.515357],
            [15.471564, 45.513171],
            [15.445424, 45.490192],
            [15.407767, 45.467],
            [15.387159, 45.462829],
            [15.364432, 45.445906],
            [15.336547, 45.439842],
            [15.27168, 45.409208],
            [15.250623, 45.406447],
            [15.268936, 45.375397],
            [15.27775, 45.351363],
            [15.275935, 45.333277],
            [15.283765, 45.319068],
            [15.269388, 45.269897],
            [15.276629, 45.25495],
            [15.25911, 45.219517],
            [15.269436, 45.184466],
            [15.277755, 45.175927],
            [15.2707, 45.14191],
            [15.245366, 45.129353],
            [15.241546, 45.106814],
            [15.20912, 45.084224],
            [15.200595, 45.055823],
            [15.179739, 45.048711],
            [15.174615, 45.036],
            [15.149295, 45.017616],
            [15.100852, 44.993178],
            [15.091637, 44.9745],
            [15.102312, 44.959449],
            [15.16054, 44.9465],
            [15.170925, 44.937828],
            [15.171263, 44.913326],
            [15.203448, 44.879499],
            [15.213161, 44.860214],
            [15.241449, 44.843936],
            [15.273225, 44.818525],
            [15.295901, 44.811238],
            [15.309659, 44.799454],
            [15.337481, 44.785772],
            [15.358558, 44.761202],
            [15.371795, 44.753601],
            [15.384993, 44.72676],
            [15.388614, 44.710014],
            [15.432722, 44.65173],
            [15.439623, 44.632928],
            [15.437163, 44.594953],
            [15.426661, 44.572284],
            [15.428746, 44.558643],
            [15.445445, 44.53261],
            [15.465298, 44.520901],
            [15.514693, 44.511124],
            [15.549583, 44.485123],
            [15.581921, 44.474233],
            [15.609715, 44.455015],
            [15.638315, 44.415969],
            [15.630605, 44.381912],
            [15.641238, 44.354689],
            [15.654448, 44.334913],
            [15.672844, 44.326493],
            [15.675488, 44.295759],
            [15.648706, 44.255351],
            [15.614106, 44.249772],
            [15.602308, 44.238464],
            [15.549965, 44.242229],
            [15.518972, 44.236083],
            [15.488145, 44.21686],
            [15.466158, 44.219919],
            [15.447381, 44.211851],
            [15.433905, 44.188807],
            [15.408098, 44.191166],
            [15.373863, 44.171189],
            [15.360714, 44.169083],
            [15.313434, 44.140677],
            [15.268572, 44.117545],
            [15.256694, 44.12435],
            [15.239116, 44.121375],
          ] as Position[],
        },
        type: "car",
      },
      {
        from: {
          code: "Zadar",
          coordinates: [] as number[],
        },
        to: {
          code: "Pichl",
          coordinates: [] as number[],
        },
        route: {
          coordinates: [
            [15.239116, 44.121375],
            [15.26795, 44.117264],
            [15.313434, 44.140677],
            [15.360714, 44.169083],
            [15.373863, 44.171189],
            [15.408098, 44.191166],
            [15.426004, 44.192413],
            [15.465355, 44.219801],
            [15.488187, 44.21676],
            [15.519018, 44.235997],
            [15.546521, 44.241893],
            [15.60618, 44.239171],
            [15.611105, 44.250085],
            [15.631656, 44.248912],
            [15.649476, 44.255614],
            [15.675974, 44.295783],
            [15.677774, 44.313581],
            [15.670147, 44.329436],
            [15.653484, 44.335819],
            [15.63149, 44.378651],
            [15.638882, 44.412013],
            [15.634039, 44.426127],
            [15.610715, 44.454052],
            [15.592836, 44.468991],
            [15.555961, 44.482304],
            [15.52639, 44.50511],
            [15.502321, 44.514849],
            [15.478988, 44.517392],
            [15.452706, 44.527235],
            [15.429565, 44.557219],
            [15.427444, 44.575683],
            [15.437319, 44.594936],
            [15.438759, 44.637543],
            [15.432377, 44.652401],
            [15.388767, 44.710048],
            [15.376907, 44.747291],
            [15.345245, 44.774316],
            [15.341621, 44.782483],
            [15.29597, 44.81151],
            [15.273413, 44.8187],
            [15.241608, 44.843976],
            [15.213223, 44.860327],
            [15.204356, 44.878642],
            [15.171693, 44.913018],
            [15.172006, 44.935443],
            [15.160642, 44.946576],
            [15.102339, 44.959558],
            [15.091291, 44.972072],
            [15.098757, 44.991615],
            [15.152954, 45.019876],
            [15.175661, 45.036873],
            [15.180711, 45.049495],
            [15.207942, 45.066147],
            [15.209388, 45.084028],
            [15.241723, 45.106642],
            [15.243419, 45.125754],
            [15.271806, 45.142684],
            [15.278476, 45.173004],
            [15.268322, 45.186762],
            [15.258761, 45.21738],
            [15.275945, 45.251647],
            [15.269805, 45.270924],
            [15.283859, 45.319612],
            [15.275031, 45.336661],
            [15.277276, 45.356584],
            [15.253186, 45.407664],
            [15.281584, 45.414345],
            [15.261425, 45.448227],
            [15.239259, 45.464346],
            [15.19302, 45.487989],
            [15.182393, 45.515225],
            [15.162799, 45.527954],
            [15.158949, 45.543009],
            [15.183794, 45.585199],
            [15.175239, 45.59477],
            [15.155846, 45.644966],
            [15.119371, 45.655991],
            [15.098058, 45.67573],
            [15.069452, 45.713334],
            [15.047541, 45.730966],
            [15.01771, 45.780517],
            [15.003724, 45.781751],
            [14.969579, 45.806616],
            [14.953869, 45.823236],
            [14.932535, 45.830789],
            [14.938795, 45.840518],
            [14.924681, 45.870432],
            [14.908321, 45.885388],
            [14.896914, 45.912166],
            [14.882446, 45.923758],
            [14.836668, 45.934796],
            [14.785821, 45.936067],
            [14.728443, 45.965001],
            [14.690084, 45.979196],
            [14.658214, 45.968969],
            [14.633163, 45.970378],
            [14.609353, 45.97792],
            [14.564183, 46.0113],
            [14.530297, 46.015938],
            [14.480058, 46.029066],
            [14.449424, 46.040266],
            [14.460941, 46.09185],
            [14.482042, 46.130207],
            [14.476298, 46.141708],
            [14.486305, 46.17451],
            [14.479075, 46.189335],
            [14.445885, 46.214727],
            [14.408478, 46.234415],
            [14.38438, 46.253944],
            [14.345218, 46.264342],
            [14.290791, 46.282936],
            [14.277844, 46.310664],
            [14.24943, 46.316105],
            [14.201449, 46.332526],
            [14.184678, 46.344424],
            [14.135111, 46.392955],
            [14.129153, 46.40517],
            [14.096764, 46.41438],
            [14.035493, 46.438578],
            [13.994766, 46.449906],
            [13.990606, 46.459905],
            [14.018356, 46.499697],
            [14.031252, 46.531658],
            [14.006388, 46.555311],
            [14.00601, 46.570324],
            [13.982468, 46.590464],
            [13.955034, 46.592434],
            [13.907612, 46.615641],
            [13.893287, 46.635985],
            [13.861963, 46.652029],
            [13.807879, 46.641564],
            [13.748227, 46.651077],
            [13.711091, 46.670261],
            [13.662427, 46.684756],
            [13.610868, 46.726104],
            [13.577598, 46.746862],
            [13.547646, 46.777561],
            [13.521401, 46.791136],
            [13.520554, 46.805685],
            [13.487007, 46.82393],
            [13.512661, 46.883962],
            [13.528772, 46.89865],
            [13.577927, 46.920389],
            [13.607143, 46.9376],
            [13.621196, 46.962869],
            [13.623886, 46.986348],
            [13.617432, 47.014977],
            [13.594506, 47.04147],
            [13.594122, 47.076668],
            [13.609367, 47.095396],
            [13.582389, 47.115652],
            [13.541244, 47.136298],
            [13.44897, 47.174215],
            [13.433237, 47.188677],
            [13.421568, 47.236034],
            [13.426646, 47.245826],
            [13.411745, 47.277815],
            [13.392618, 47.299098],
            [13.396576, 47.315987],
            [13.394726, 47.369739],
            [13.410122, 47.391322],
            [13.43515, 47.3833],
            [13.493108, 47.387677],
            [13.561138, 47.404706],
            [13.576497, 47.403774],
            [13.601326, 47.388546],
            [13.61243, 47.389886],
          ] as Position[],
        },
        type: "car",
      },
      {
        from: {
          code: "villach-hbf",
          coordinates: [13.848538, 46.618624],
        },
        to: {
          code: "zermatt",
          coordinates: [7.748054, 46.024599],
        },
        type: "train",
      },
      {
        from: {
          code: "zermatt",
          coordinates: [7.748054, 46.024599],
        },
        to: {
          code: "zuerich-hb",
          coordinates: [8.54028, 47.37806],
        },
        type: "train",
      },
      {
        from: {
          code: "zuerich-hb",
          coordinates: [8.54028, 47.37806],
        },
        to: {
          code: "zagreb",
          coordinates: [15.978478, 45.804453],
        },
        type: "train",
      },
      {
        from: {
          code: "zagreb",
          coordinates: [15.978478, 45.804453],
        },
        to: {
          code: "budapest-keleti",
          coordinates: [19.085069, 47.500385],
        },
        type: "train",
      },
      {
        from: {
          code: "Budapest",
          coordinates: [] as number[],
        },
        to: {
          code: "Bratislava",
          coordinates: [] as number[],
        },
        type: "bus",
      },
      {
        from: {
          code: "Bratislava",
          coordinates: [] as number[],
        },
        to: {
          code: "Vienna",
          coordinates: [] as number[],
        },
        type: "bus",
      },
      {
        from: {
          code: "wien-hbf",
          coordinates: [16.375864, 48.184923],
        },
        to: {
          code: "zator",
          coordinates: [19.4287204, 50.0022845],
        },
        type: "train",
      },
      {
        from: {
          code: "zator",
          coordinates: [19.4287204, 50.0022845],
        },
        to: {
          code: "krakow-glowny",
          coordinates: [19.947423, 50.067192],
        },
        type: "train",
      },
      {
        from: {
          code: "krakow-glowny",
          coordinates: [19.947423, 50.067192],
        },
        to: {
          code: "praha-hl-n",
          coordinates: [14.436037, 50.083058],
        },
        type: "train",
      },
      {
        from: {
          code: "praha-hl-n",
          coordinates: [14.436037, 50.083058],
        },
        to: {
          code: "rhenen",
          coordinates: [5.578319, 51.95801],
        },
        type: "train",
      },
    ],
    duration: 28,
    date: "2022-07",
    story: "",
    facts: "",
    prices: {
      flights: 0,
      total: 0,
    },
  },
  {
    id: "2",
    title: "London, Ibiza, Barcelona, Porto",
    legs: [
      {
        from: {
          code: "MST",
          coordinates: [] as number[],
        },
        to: {
          code: "LTN",
          coordinates: [] as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "LTN",
          coordinates: [] as number[],
        },
        to: {
          code: "IBZ",
          coordinates: [] as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "IBZ",
          coordinates: [] as number[],
        },
        to: {
          code: "BCN",
          coordinates: [] as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "BCN",
          coordinates: [] as number[],
        },
        to: {
          code: "OPO",
          coordinates: [] as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "OPO",
          coordinates: [] as number[],
        },
        to: {
          code: "MST",
          coordinates: [] as number[],
        },
        type: "plane",
      },
    ],
    duration: 8,
    date: "2022-10",
    story: "",
    facts: "",
    prices: {
      flights: 0,
      total: 0,
    },
  },
  {
    id: "3",
    title: "Catania, Dubai, Naples, Bari",
    legs: [
      {
        from: {
          code: "rhenen",
          coordinates: [5.578319, 51.95801],
        },
        to: {
          code: "amsterdam-sloterdijk",
          coordinates: [4.838111, 52.389025],
        },
        type: "train",
      },
      {
        from: {
          code: "amsterdam-sloterdijk",
          coordinates: [] as number[],
        },
        to: {
          code: "CGN",
          coordinates: [] as number[],
        },
        route: {
          coordinates: [
            [4.838411, 52.389795],
            [4.869482, 52.419108],
            [4.900877, 52.423351],
            [4.950402, 52.403398],
            [4.972699, 52.381522],
            [4.96915, 52.348827],
            [5.001339, 52.333157],
            [5.162847, 52.304967],
            [5.204502, 52.266776],
            [5.215239, 52.246871],
            [5.247499, 52.226809],
            [5.385875, 52.204397],
            [5.444065, 52.16824],
            [5.51144, 52.162851],
            [5.565722, 52.165441],
            [5.567388, 52.119208],
            [5.592793, 52.096608],
            [5.618305, 52.052515],
            [5.610727, 52.025554],
            [5.674608, 52.012428],
            [5.716007, 52.020485],
            [5.856204, 52.028501],
            [5.93207, 52.014374],
            [5.956252, 51.991285],
            [5.99982, 51.96754],
            [6.082627, 51.942147],
            [6.152412, 51.908356],
            [6.206977, 51.869441],
            [6.268775, 51.861221],
            [6.380062, 51.828192],
            [6.482482, 51.803393],
            [6.506085, 51.781916],
            [6.609424, 51.738552],
            [6.623191, 51.712349],
            [6.704902, 51.679925],
            [6.830228, 51.53964],
            [6.80831, 51.435281],
            [6.796839, 51.418825],
            [6.832405, 51.360056],
            [6.893839, 51.323085],
            [6.914962, 51.261303],
            [6.914129, 51.228325],
            [6.965912, 51.152952],
            [6.9877, 51.109438],
            [6.9895, 51.059537],
            [7.008079, 51.039583],
            [7.014308, 50.985985],
            [7.070103, 50.905592],
            [7.117135, 50.8813],
          ],
        },
        type: "bus",
      },
      {
        from: {
          code: "CGN",
          coordinates: [] as number[],
        },
        to: {
          code: "BGY",
          coordinates: [] as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "BGY",
          coordinates: [] as number[],
        },
        to: {
          code: "CTA",
          coordinates: [] as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "CTA",
          coordinates: [] as number[],
        },
        to: {
          code: "AUH",
          coordinates: [] as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "AUH",
          coordinates: [] as number[],
        },
        to: {
          code: "Dubai",
          coordinates: [] as number[],
        },
        route: {
          coordinates: [
            [54.640555, 24.453639],
            [54.636604, 24.450723],
            [54.631363, 24.455495],
            [54.634544, 24.459999],
            [54.628541, 24.464226],
            [54.630893, 24.468628],
            [54.649303, 24.492292],
            [54.684247, 24.537585],
            [54.692515, 24.546069],
            [54.694124, 24.549677],
            [54.697001, 24.57547],
            [54.698288, 24.579818],
            [54.717096, 24.621495],
            [54.719532, 24.624917],
            [54.752934, 24.660412],
            [54.783715, 24.700593],
            [54.786325, 24.703325],
            [54.820911, 24.733016],
            [54.823132, 24.735441],
            [54.847052, 24.767119],
            [54.849052, 24.770455],
            [54.86822, 24.808817],
            [54.871584, 24.814794],
            [54.896447, 24.85028],
            [54.898939, 24.853231],
            [54.927702, 24.880667],
            [54.93211, 24.885695],
            [54.939203, 24.895647],
            [54.944851, 24.902251],
            [54.95167, 24.907574],
            [54.962715, 24.912656],
            [55.058579, 24.945839],
            [55.06741, 24.948974],
            [55.075605, 24.954275],
            [55.079649, 24.958881],
            [55.089154, 24.975039],
            [55.092738, 24.986815],
            [55.097967, 25.01866],
            [55.099358, 25.023668],
            [55.103315, 25.031218],
            [55.11025, 25.040969],
            [55.113572, 25.038955],
            [55.117452, 25.045946],
          ],
        },
        type: "bus",
      },
      {
        from: {
          code: "Dubai",
          coordinates: [] as number[],
        },
        to: {
          code: "AUH",
          coordinates: [] as number[],
        },
        route: {
          coordinates: [
            [55.117452, 25.045946],
            [55.113572, 25.038955],
            [55.11025, 25.040969],
            [55.103315, 25.031218],
            [55.099358, 25.023668],
            [55.097967, 25.01866],
            [55.092738, 24.986815],
            [55.089154, 24.975039],
            [55.079649, 24.958881],
            [55.075605, 24.954275],
            [55.06741, 24.948974],
            [55.058579, 24.945839],
            [54.962715, 24.912656],
            [54.95167, 24.907574],
            [54.944851, 24.902251],
            [54.939203, 24.895647],
            [54.93211, 24.885695],
            [54.927702, 24.880667],
            [54.898939, 24.853231],
            [54.896447, 24.85028],
            [54.871584, 24.814794],
            [54.86822, 24.808817],
            [54.849052, 24.770455],
            [54.847052, 24.767119],
            [54.823132, 24.735441],
            [54.820911, 24.733016],
            [54.786325, 24.703325],
            [54.783715, 24.700593],
            [54.752934, 24.660412],
            [54.719532, 24.624917],
            [54.717096, 24.621495],
            [54.698288, 24.579818],
            [54.697001, 24.57547],
            [54.694124, 24.549677],
            [54.692515, 24.546069],
            [54.684247, 24.537585],
            [54.649303, 24.492292],
            [54.630893, 24.468628],
            [54.628541, 24.464226],
            [54.634544, 24.459999],
            [54.631363, 24.455495],
            [54.636604, 24.450723],
            [54.640555, 24.453639],
          ],
        },
        type: "bus",
      },
      {
        from: {
          code: "AUH",
          coordinates: [] as number[],
        },
        to: {
          code: "NAP",
          coordinates: [] as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "Naples",
          coordinates: [] as number[],
        },
        to: {
          code: "Bari",
          coordinates: [] as number[],
        },
        type: "bus",
      },
      {
        from: {
          code: "BRI",
          coordinates: [] as number[],
        },
        to: {
          code: "MST",
          coordinates: [] as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "maastricht",
          coordinates: [5.705875, 50.849811],
        },
        to: {
          code: "kesteren",
          coordinates: [5.5833465, 51.9313869],
        },
        type: "train",
      },
    ],
    duration: 10,
    date: "2023-03",
    story: "",
    facts: "",
    prices: {
      flights: 0,
      total: 0,
    },
  },
  {
    id: "4",
    title: "Milan, Bucharest, Sofia",
    legs: [
      {
        from: {
          code: "NRN",
          coordinates: [] as number[],
        },
        to: {
          code: "BGY",
          coordinates: [] as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "BGY",
          coordinates: [] as number[],
        },
        to: { code: "OTP", coordinates: [] },
        type: "plane",
      },
      {
        from: {
          code: "OTP",
          coordinates: [] as number[],
        },
        to: { code: "SOF", coordinates: [] },
        type: "plane",
      },
      {
        from: {
          code: "SOF",
          coordinates: [] as number[],
        },
        to: { code: "EIN", coordinates: [] },
        type: "plane",
      },
    ],
    duration: 9,
    date: "2023-07",
    story: "",
    facts: "",
    prices: {
      flights: 0,
      total: 0,
    },
  },
  // {
  //   id: "5",
  //   title: "Copenhagen, Oslo, Tromsø, Reykjavik",
  //   legs: [],
  //   duration: 20,
  //   date: "2023-08",
  //   story: "",
  //   facts: "",
  //   prices: {
  //    flights: 0,
  //    total: 0,
  //   },
  // },
];
