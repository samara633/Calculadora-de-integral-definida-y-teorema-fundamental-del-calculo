from flask import Flask, render_template, request
from sympy import symbols, integrate, sin, cos
from flask_wtf.csrf import CSRFProtect

csrf = CSRFProtect(app)

# Desactivar CSRF para pruebas
csrf.init_app(app, disable_on_request=lambda req: app.config['TESTING'])


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', resultado=None)

@app.route('/calcular_integral', methods=['POST'])
def calcular_integral():
    x = symbols('x')
    funcion = request.form['funcion']
    limite_inf = float(request.form['limite_inf'])
    limite_sup = float(request.form['limite_sup'])

    try:
        f = eval(funcion)  # Se evalúa la entrada del usuario como una expresión de Python
        resultado = integrate(f, (x, limite_inf, limite_sup))
        return render_template('index.html', resultado=resultado)
    except Exception as e:
        return render_template('index.html', resultado=f"Error: {e}")

if __name__ == '__main__':
    app.run(debug=True)


#Integral Indefinida
#print ('Integrales Indefinidas')
#f=input('ingrese la funcion f=')
#x=symbols('x')
#res1=integrate(f,x)
#print(f'la respuesta es{res}')
#f=x**2+2*x-3
#res=integrate(f,x)
#print(f'la respuesta es {res}')


#Integrales Definidas
#print ('Integrales Definidas')
#f=input('Ingrese la funcion definida f=')
#x=symbols('x')
#x0=input('ingrese el limite inferior x0=')
#x1=input('ingrese el limite superior x1=')
#res2=integrate(f, (x,x0,x1))
#print(f'el resultado es {res2}')

#Integrales Definidas Trigonometricas
#
#print ('Integrales Definidas Trigonometicas')
#x=symbols('x')
#f=sin(x)+cos(x)*sin(x)
#x0=input('ingrese el limite inferior x0=')
#x1=input('ingrese el limite superior x1=')
#res3=integrate(f,(x,x0,x1))
#print(f'el resultado es {res3}')