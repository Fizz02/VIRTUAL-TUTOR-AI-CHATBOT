abstract class C1{
    public C1(){
        System.out.print(1);
    }
}
class solarSystem {
    int s;
    void display(){
        System.out.println(s);
    }
}

class Moon extends solarSystem {
    int m;
    void display(){
        System.out.println(m);
    }
}
public class test {
    public static  void main (String[]args) {
        Moon moonObj = new Moon();
        moonObj.s = 10;
        moonObj.m = 40;
        moonObj.display();
    }
}